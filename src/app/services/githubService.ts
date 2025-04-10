import { GitHubRepository, ActivityItem, ProjectItem } from '../types/github';
import { GITHUB_CONFIG } from '../config/github';

const GITHUB_USERNAME = GITHUB_CONFIG.username; 
const PORTFOLIO_TOPIC = 'portfolio';

const apiCache: {
  repos?: {data: GitHubRepository[], timestamp: number},
  activities?: {data: ActivityItem[], timestamp: number}
} = {};

const CACHE_EXPIRY = 10 * 60 * 1000; // 10 minutos em milissegundos

function getAuthHeaders() {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };
  
  if (GITHUB_CONFIG.token && GITHUB_CONFIG.token !== 'YOUR_PERSONAL_ACCESS_TOKEN') {
    headers['Authorization'] = `token ${GITHUB_CONFIG.token}`;
  }
  
  return headers;
}

interface GithubPushEvent {
  type: string;
  repo: {
    name: string;
  };
  payload: {
    commits?: Array<{
      sha: string;
      message: string;
    }>;
  };
  created_at: string;
}

export async function fetchRepositories(): Promise<GitHubRepository[]> {
  try {
    const now = Date.now();
    if (apiCache.repos && (now - apiCache.repos.timestamp < CACHE_EXPIRY)) {
      return apiCache.repos.data;
    }
    
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
      headers: getAuthHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    
    const allRepos = await response.json();
    
    const portfolioRepos = allRepos.filter(
      (repo: GitHubRepository) => repo.topics && repo.topics.includes(PORTFOLIO_TOPIC)
    );
    
    apiCache.repos = {
      data: portfolioRepos,
      timestamp: now
    };
    
    return portfolioRepos;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}

export async function fetchUserEvents(): Promise<ActivityItem[]> {
  try {
    const now = Date.now();
    if (apiCache.activities && (now - apiCache.activities.timestamp < CACHE_EXPIRY)) {
      return apiCache.activities.data;
    }
    
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`, {
      headers: getAuthHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    
    const events = await response.json() as GithubPushEvent[];
    
    const pushEvents = events.filter((event) => event.type === 'PushEvent');
    
    const activities: ActivityItem[] = [];
    
    for (const event of pushEvents) {
      if (event.payload.commits && event.payload.commits.length > 0) {
        const commit = event.payload.commits[0];
        activities.push({
          type: 'commit',
          project: event.repo.name.split('/')[1],
          description: formatCommitMessage(commit.message),
          time: formatDate(new Date(event.created_at)),
          url: `https://github.com/${event.repo.name}/commit/${commit.sha}`
        });
      }
    }
    
    const result = activities.slice(0, 5);
    
    apiCache.activities = {
      data: result,
      timestamp: now
    };
    
    return result;
  } catch (error) {
    console.error('Error fetching GitHub events:', error);
    return [];
  }
}

export function convertReposToProjects(repos: GitHubRepository[]): ProjectItem[] {
  return repos
    .map(repo => ({
      id: repo.id,
      title: formatRepoName(repo.name),
      description: repo.description || 'No description provided',
      tech: repo.topics.length > 0 ? repo.topics.filter(topic => topic !== PORTFOLIO_TOPIC) : [repo.language || 'Unknown'],
      starred: repo.stargazers_count > 0,
      url: repo.html_url
    }))
    .slice(0, 10);
}

function formatCommitMessage(message: string): string {
  return message.length > 50 ? message.substring(0, 47) + '...' : message;
}

function formatDate(date: Date): string {
  const now = new Date();
  const diffMillis = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMillis / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return `${Math.floor(diffDays / 30)} months ago`;
}

function formatRepoName(repoName: string): string {
  return repoName
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
} 