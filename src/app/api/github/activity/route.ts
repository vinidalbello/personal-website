import { NextResponse } from 'next/server';
import { fetchUserEvents } from '@/app/services/githubService';

export async function GET() {
  try {
    const activities = await fetchUserEvents();
    
    return NextResponse.json({ activities });
  } catch (error) {
    console.error('Error in GitHub activity API route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub activities' },
      { status: 500 }
    );
  }
} 