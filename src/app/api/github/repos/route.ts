import { NextResponse } from 'next/server';
import { fetchRepositories, convertReposToProjects } from '@/app/services/githubService';

export async function GET() {
  try {
    const repos = await fetchRepositories();
    const projects = convertReposToProjects(repos);
    
    return NextResponse.json({ projects });
  } catch (error) {
    console.error('Error in GitHub repos API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 }
    );
  }
} 