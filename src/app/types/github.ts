export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  pushed_at: string;
  created_at: string;
  updated_at: string;
}

export interface ActivityItem {
  type: 'commit' | 'release' | 'issue';
  project: string;
  description: string;
  time: string;
  url: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tech: string[];
  starred: boolean;
  url: string;
} 