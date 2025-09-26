"use client";

import { useState, useRef, useEffect } from "react";
import { ProjectItem } from "../../types/github";

type ContentTab = "projects" | "about";

export const MainContent = ({ projects }: { projects: ProjectItem[] }) => {
  const [activeTab, setActiveTab] = useState<ContentTab>("projects");
  const [prevTab, setPrevTab] = useState<ContentTab | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<{ [key in ContentTab]?: HTMLButtonElement | null }>({});
  
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
    const tabOrder: ContentTab[] = ["projects", "about"];
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
            {projects.map((project) => (
              <div key={project.id} className="bg-paleta-darkGray p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-2">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-paleta-white font-title hover:underline"
                  >
                    {project.title}
                  </a>
                  {project.starred && (
                    <span className="text-paleta-accentGreen">★</span>
                  )}
                </div>
                <p className="text-paleta-white mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-paleta-nearBlack px-2 py-1 rounded-md text-xs text-paleta-lightGray hover:bg-paleta-accentGreen hover:text-paleta-nearBlack transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case "about":
        return (
          <div className={`space-y-4 ${animationClass}`}>
            <div className="bg-paleta-darkGray p-6 md:p-8 rounded-lg shadow-md">
              <h1 className="text-3xl sm:text-4xl font-bold font-title text-paleta-white mb-4">
                Hey! I&apos;m Vinícius Dal Bello
              </h1>
              <p className="text-lg sm:text-xl text-paleta-lightGray leading-relaxed">
                I&apos;m a <span className="text-paleta-accentGreen font-semibold">software developer</span> passionate about building impactful digital experiences. Welcome to my portfolio!
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <div className="flex border-b border-paleta-accentGreen mb-4 relative">
        <button
          ref={(el) => { tabRefs.current.projects = el; }}
          onClick={() => handleTabChange("projects")}
          className={`px-4 py-2 font-medium transition-transform duration-200 hover:scale-105 ${
            activeTab === "projects"
              ? "text-paleta-white"
              : "text-paleta-accentGreen hover:text-paleta-white"
          }`}
        >
          Projects
        </button>
        <button
          ref={(el) => { tabRefs.current.about = el; }}
          onClick={() => handleTabChange("about")}
          className={`px-4 py-2 font-medium transition-transform duration-200 hover:scale-105 ${
            activeTab === "about"
              ? "text-paleta-white"
              : "text-paleta-accentGreen hover:text-paleta-white"
          }`}
        >
          About Me
        </button>
        
        <div 
          className="absolute bottom-0 h-0.5 bg-paleta-white tab-indicator"
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