"use client";

import { useState, useRef, useEffect } from "react";
import { ProjectItem } from "../types/github";

type ContentTab = "projects" | "posts" | "articles";

export const MainContent = () => {
  const [activeTab, setActiveTab] = useState<ContentTab>("projects");
  const [prevTab, setPrevTab] = useState<ContentTab | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<{ [key in ContentTab]?: HTMLButtonElement | null }>({});
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const posts = [
    {
      id: 1,
      title: "Building Scalable Web Applications",
      date: "2023-10-15",
      excerpt: "Learn how to build web applications that can handle millions of users.",
    },
    {
      id: 2,
      title: "Optimizing React Performance",
      date: "2023-09-22",
      excerpt: "Tips and tricks for making your React applications blazing fast.",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "The Future of Web Development",
      date: "2023-11-05",
      publication: "Dev.to",
      url: "https://dev.to/article/123",
    },
    {
      id: 2,
      title: "Understanding TypeScript Generics",
      date: "2023-08-18",
      publication: "Medium",
      url: "https://medium.com/article/456",
    },
  ];

  const fallbackProjects: ProjectItem[] = [
    {
      id: 1,
      title: "Customer Order Manager",
      description: "A comprehensive system for customer registration and order management. Allows businesses to track customers, manage product orders, and maintain inventory records efficiently.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      starred: true,
      url: "https://github.com/vinidalbello/customer-order-manager"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      starred: true,
      url: "https://github.com/vinidalbello/portfolio"
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A complete e-commerce solution with product management and payment processing.",
      tech: ["React", "Node.js", "PostgreSQL"],
      starred: true,
      url: "https://github.com/vinidalbello/ecommerce"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A simple but powerful app to manage daily tasks and increase productivity.",
      tech: ["Vue.js", "Firebase"],
      starred: false,
      url: "https://github.com/vinidalbello/tasks"
    },
  ];
  
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
    const tabOrder: ContentTab[] = ["projects", "posts", "articles"];
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
      case "posts":
        return (
          <div className={`space-y-4 ${animationClass}`}>
            {posts.map((post) => (
              <div key={post.id} className="bg-paleta-lightBrown p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-paleta-darkBrown font-title mb-1">{post.title}</h3>
                <p className="text-paleta-mediumBrown text-sm mb-2">{post.date}</p>
                <p className="text-paleta-darkBrown">{post.excerpt}</p>
              </div>
            ))}
          </div>
        );
      case "articles":
        return (
          <div className={`space-y-4 ${animationClass}`}>
            {articles.map((article) => (
              <div key={article.id} className="bg-paleta-lightBrown p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl font-semibold text-paleta-darkBrown hover:text-paleta-darkestBrown hover:underline mb-1 block font-title"
                >
                  {article.title}
                </a>
                <p className="text-paleta-mediumBrown text-sm flex items-center gap-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.publication}</span>
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
          ref={(el) => { tabRefs.current.posts = el; }}
          onClick={() => handleTabChange("posts")}
          className={`px-4 py-2 font-medium transition-transform duration-200 hover:scale-105 ${
            activeTab === "posts"
              ? "text-paleta-darkBrown"
              : "text-paleta-mediumBrown hover:text-paleta-darkBrown"
          }`}
        >
          Posts
        </button>
        <button
          ref={(el) => { tabRefs.current.articles = el; }}
          onClick={() => handleTabChange("articles")}
          className={`px-4 py-2 font-medium transition-transform duration-200 hover:scale-105 ${
            activeTab === "articles"
              ? "text-paleta-darkBrown"
              : "text-paleta-mediumBrown hover:text-paleta-darkBrown"
          }`}
        >
          Articles
        </button>
        
        {/* Botão de gerenciamento de projetos (só visível quando projetos está ativo) */}
        {activeTab === "projects" && (
          <a
            href="/admin/projects"
            className="ml-auto px-2 py-1 text-xs text-paleta-mediumBrown hover:text-paleta-darkBrown transition-colors"
            title="Gerenciar projetos"
          >
            <span className="hidden sm:inline">Gerenciar</span> ⚙️
          </a>
        )}
        
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