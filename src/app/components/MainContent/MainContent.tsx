"use client";

import { useState, useRef, useEffect } from "react";
import { ProjectItem } from "../../types/github";
import { fallbackProjects, games, books } from './staticData';

type ContentTab = "projects" | "games" | "books";

export const MainContent = () => {
  const [activeTab, setActiveTab] = useState<ContentTab>("projects");
  const [prevTab, setPrevTab] = useState<ContentTab | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<{ [key in ContentTab]?: HTMLButtonElement | null }>({});
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/github/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data.projects.length > 0 ? data.projects : fallbackProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(fallbackProjects);
      } finally {
        setLoadingProjects(false);
      }
    }

    fetchProjects();
  }, []);

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  const handleTabChange = (tab: ContentTab) => {
    if (tab !== activeTab) {
      setPrevTab(activeTab);
      setActiveTab(tab);
    }
  };

  const getAnimationClass = () => {
    const tabOrder: ContentTab[] = ["projects", "games", "books"];
    const prevIndex = prevTab ? tabOrder.indexOf(prevTab) : -1;
    const activeIndex = tabOrder.indexOf(activeTab);

    if (prevTab === null) return "animate-fade-in";
    return prevIndex < activeIndex ? "animate-slide-left" : "animate-slide-right";
  };

  const renderContent = () => {
    const animationClass = getAnimationClass();

    switch (activeTab) {
      case "projects":
        return (
          <div className={`space-y-4 ${animationClass}`}>
            {loadingProjects ? (
              <>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-paleta-lightBrown p-4 rounded-lg shadow-md animate-pulse">
                    <div className="flex justify-between items-start mb-2">
                      <div className="h-6 bg-paleta-lightestBrown rounded w-1/3"></div>
                      <div className="h-6 w-6 bg-paleta-lightestBrown rounded-full"></div>
                    </div>
                    <div className="h-4 bg-paleta-lightestBrown rounded w-5/6 mb-3"></div>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="h-6 bg-paleta-lightestBrown rounded w-16"></div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            ) : (
              projects.map((project) => (
                <div key={project.id} className="bg-paleta-lightBrown p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-paleta-darkBrown font-title hover:underline"
                    >
                      {project.title}
                    </a>
                    {project.starred && (
                      <span className="text-paleta-mediumBrown">★</span>
                    )}
                  </div>
                  <p className="text-paleta-darkBrown mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-paleta-lightestBrown px-2 py-1 rounded-md text-xs text-paleta-darkestBrown hover:bg-paleta-mediumBrown hover:text-paleta-lightestBrown transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        );
      case "games":
        return (
          <div className={`space-y-4 ${animationClass}`}>
            {games.map((game) => (
              <div key={game.id} className="bg-paleta-lightBrown p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-paleta-darkBrown font-title">{game.title}</h3>
                  <div className="bg-paleta-darkBrown text-paleta-lightestBrown px-2 py-1 rounded-md font-bold">
                    {game.rating.toFixed(1)}
                  </div>
                </div>
                <p className="text-paleta-mediumBrown text-sm flex items-center flex-wrap gap-2">
                  <span>{game.producer}</span>
                </p>
                {game.imageUrl && (
                  <div className="mt-3 w-full h-48 bg-paleta-lightestBrown rounded-md overflow-hidden flex justify-center">
                    <img 
                      src={game.imageUrl} 
                      alt={game.title}
                      className="h-full object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      case "books":
        return (
          <div className={`space-y-4 ${animationClass}`}>
            {books.map((book) => (
              <div key={book.id} className="bg-paleta-lightBrown p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-2">
                  <a 
                    href={book.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl font-semibold text-paleta-darkBrown hover:text-paleta-darkestBrown hover:underline font-title"
                  >
                    {book.title}
                  </a>
                  <div className="bg-paleta-darkBrown text-paleta-lightestBrown px-2 py-1 rounded-md font-bold">
                    {book.rating.toFixed(1)}
                  </div>
                </div>
                <p className="text-paleta-mediumBrown text-sm flex items-center flex-wrap gap-2">
                  <span>{book.author}</span>
                </p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <div className="flex border-b border-paleta-mediumBrown mb-4 relative">
        <button
          ref={(el) => { tabRefs.current.projects = el; }}
          onClick={() => handleTabChange("projects")}
          className={`px-4 py-2 font-medium transition-transform duration-200 hover:scale-105 ${
            activeTab === "projects"
              ? "text-paleta-darkBrown"
              : "text-paleta-mediumBrown hover:text-paleta-darkBrown"
          }`}
        >
          Projects
        </button>
        <button
          ref={(el) => { tabRefs.current.games = el; }}
          onClick={() => handleTabChange("games")}
          className={`px-4 py-2 font-medium transition-transform duration-200 hover:scale-105 ${
            activeTab === "games"
              ? "text-paleta-darkBrown"
              : "text-paleta-mediumBrown hover:text-paleta-darkBrown"
          }`}
        >
          Games
        </button>
        <button
          ref={(el) => { tabRefs.current.books = el; }}
          onClick={() => handleTabChange("books")}
          className={`px-4 py-2 font-medium transition-transform duration-200 hover:scale-105 ${
            activeTab === "books"
              ? "text-paleta-darkBrown"
              : "text-paleta-mediumBrown hover:text-paleta-darkBrown"
          }`}
        >
          Books
        </button>
        
        <div 
          className="absolute bottom-0 h-0.5 bg-paleta-darkBrown tab-indicator"
          style={{ 
            left: `${indicatorStyle.left}px`, 
            width: `${indicatorStyle.width}px`,
            transition: 'left 0.3s ease, width 0.3s ease'
          }}
        ></div>
      </div>
      
      {renderContent()}
    </div>
  );
}; 