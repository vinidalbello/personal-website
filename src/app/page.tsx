import { MainContent } from "./components/MainContent/MainContent";
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar";
import { RightSidebar } from "./components/RightSidebar/RightSidebar";
import { fetchUserEvents, fetchRepositories } from "./services/githubService";
import { GitHubRepository, ProjectItem } from "./types/github";

export default async function Home() {
  const [activities, repositories] = await Promise.all([
    fetchUserEvents(),
    fetchRepositories(),
  ]);

  const projects: ProjectItem[] = repositories.map((repo: GitHubRepository) => ({
    id: repo.id,
    title: repo.name,
    description: repo.description || "",
    tech: repo.topics || [],
    starred: repo.stargazers_count > 0,
    url: repo.html_url,
  }));

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <LeftSidebar />
        </div>
        <div className="w-full md:w-1/2 border-x border-paleta-accentGreen animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <MainContent projects={projects} />
        </div>
        <div className="w-full md:w-1/4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <RightSidebar activities={activities} />
        </div>
      </div>
    </div>
  );
}
