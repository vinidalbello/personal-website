// Tipos para repositórios do GitHub
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

// Tipos para commits do GitHub
export interface GitHubCommit {
  sha: string;
  html_url: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
  repository: {
    name: string;
    full_name: string;
  };
}

// Tipos para as atividades formatadas para exibição
export interface ActivityItem {
  type: 'commit' | 'release' | 'issue';
  project: string;
  description: string;
  time: string;
  url: string;
}

// Tipo para projeto formatado para exibição
export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tech: string[];
  starred: boolean;
  url: string;
} 