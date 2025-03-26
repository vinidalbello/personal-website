import { GitHubRepository, ActivityItem, ProjectItem } from '../types/github';
import { GITHUB_CONFIG } from '../config/github';

const GITHUB_USERNAME = GITHUB_CONFIG.username; 
const PORTFOLIO_TOPIC = 'portfolio';

// Cache para as chamadas de API (básico, só para demonstração)
const apiCache: {
  repos?: {data: GitHubRepository[], timestamp: number},
  activities?: {data: ActivityItem[], timestamp: number}
} = {};

// Cache expira em 10 minutos
const CACHE_EXPIRY = 10 * 60 * 1000; // 10 minutos em milissegundos

// Função auxiliar para criar o cabeçalho de autenticação
function getAuthHeaders() {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };
  
  // Adiciona o token apenas se estiver configurado
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

/**
 * Busca os repositórios do usuário do GitHub que possuem a tag "portfolio"
 */
export async function fetchRepositories(): Promise<GitHubRepository[]> {
  try {
    // Verifica se há dados em cache e se ainda são válidos
    const now = Date.now();
    if (apiCache.repos && (now - apiCache.repos.timestamp < CACHE_EXPIRY)) {
      console.log('Using cached repositories data');
      return apiCache.repos.data;
    }
    
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
      headers: getAuthHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    
    const allRepos = await response.json();
    
    // Filtra apenas os repositórios com o tópico "portfolio"
    const portfolioRepos = allRepos.filter(
      (repo: GitHubRepository) => repo.topics && repo.topics.includes(PORTFOLIO_TOPIC)
    );
    
    // Salva no cache
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

/**
 * Busca os commits recentes do usuário do GitHub
 */
export async function fetchUserEvents(): Promise<ActivityItem[]> {
  try {
    // Verifica se há dados em cache e se ainda são válidos
    const now = Date.now();
    if (apiCache.activities && (now - apiCache.activities.timestamp < CACHE_EXPIRY)) {
      console.log('Using cached activities data');
      return apiCache.activities.data;
    }
    
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`, {
      headers: getAuthHeaders()
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }
    
    const events = await response.json() as GithubPushEvent[];
    
    // Filtra apenas eventos de push (commits)
    const pushEvents = events.filter((event) => event.type === 'PushEvent');
    
    // Converte para o formato de atividade
    const activities: ActivityItem[] = [];
    
    for (const event of pushEvents) {
      // Pega apenas o primeiro commit de cada evento push
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
    
    const result = activities.slice(0, 5); // Retorna apenas os 5 mais recentes
    
    // Salva no cache
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

/**
 * Converte repositórios do GitHub para o formato de projetos do site
 */
export function convertReposToProjects(repos: GitHubRepository[]): ProjectItem[] {
  // Converte para o formato de projetos
  return repos
    .map(repo => ({
      id: repo.id,
      title: formatRepoName(repo.name),
      description: repo.description || 'No description provided',
      tech: repo.topics.length > 0 ? repo.topics.filter(topic => topic !== PORTFOLIO_TOPIC) : [repo.language || 'Unknown'],
      starred: repo.stargazers_count > 0,
      url: repo.html_url
    }))
    .slice(0, 10); // Limita aos 10 primeiros projetos
}

// Funções auxiliares
function formatCommitMessage(message: string): string {
  // Trunca a mensagem se for muito longa e adiciona ...
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
  // Converte nomes com hífen ou underline para formato título
  return repoName
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
} 