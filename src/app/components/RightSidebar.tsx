"use client";

import { useEffect, useState } from 'react';
import { ActivityItem } from '../types/github';

export const RightSidebar = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Busca atividades do GitHub quando o componente é montado
  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await fetch('/api/github/activity');
        if (!response.ok) {
          throw new Error('Failed to fetch activities');
        }
        const data = await response.json();
        setActivities(data.activities);
      } catch (error) {
        console.error('Error fetching activities:', error);
        // Usar atividades locais de fallback em caso de erro
        setActivities(fallbackActivities);
      } finally {
        setLoading(false);
      }
    }

    fetchActivities();
  }, []);

  const skills = [
    { name: "TypeScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Docker", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "Node.js", level: 85 },
  ];

  // Atividades de fallback caso a API falhe
  const fallbackActivities = [
    { 
      type: "commit" as const, 
      project: "portfolio-website", 
      description: "Add dark mode support", 
      time: "2 days ago",
      url: "#" 
    },
    { 
      type: "issue" as const, 
      project: "e-commerce-platform", 
      description: "Fixed payment gateway integration", 
      time: "4 days ago",
      url: "#" 
    },
    { 
      type: "release" as const, 
      project: "task-management-app", 
      description: "v1.2.0 released", 
      time: "1 week ago",
      url: "#" 
    },
  ];

  return (
    <div className="sticky top-4 space-y-4">
      <div className="bg-paleta-lightBrown p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-3 text-paleta-darkestBrown font-title">Skills</h3>
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.name} className="transform transition-all duration-500 hover:translate-x-1">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-paleta-darkBrown">{skill.name}</span>
                <span className="text-paleta-mediumBrown">{skill.level}%</span>
              </div>
              <div className="h-2 bg-paleta-lightestBrown rounded-full overflow-hidden">
                <div 
                  className="h-full bg-paleta-mediumBrown rounded-full transition-all duration-500 hover:bg-paleta-darkBrown" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-paleta-lightBrown p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-3 text-paleta-darkestBrown font-title">Achievements</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 bg-paleta-mediumBrown rounded-full flex items-center justify-center text-xl mb-1 transition-transform duration-300 transform group-hover:scale-110">
              🏆
            </div>
            <span className="text-xs text-center text-paleta-darkBrown group-hover:font-bold transition-all duration-300">Top Contributor</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 bg-paleta-darkBrown rounded-full flex items-center justify-center text-xl mb-1 transition-transform duration-300 transform group-hover:scale-110">
              🚀
            </div>
            <span className="text-xs text-center text-paleta-darkBrown group-hover:font-bold transition-all duration-300">Fast Learner</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 bg-paleta-darkestBrown rounded-full flex items-center justify-center text-xl mb-1 text-paleta-lightestBrown transition-transform duration-300 transform group-hover:scale-110">
              🔧
            </div>
            <span className="text-xs text-center text-paleta-darkBrown group-hover:font-bold transition-all duration-300">Problem Solver</span>
          </div>
        </div>
      </div>

      <div className="bg-paleta-lightBrown p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-3 text-paleta-darkestBrown font-title">Latest Activity</h3>
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-paleta-lightestBrown rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-paleta-lightestBrown rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {activities.map((item, index) => (
              <div 
                key={index} 
                className="border-l-2 border-paleta-mediumBrown pl-3 py-1 hover:border-paleta-darkBrown transition-colors duration-300 transform hover:translate-x-1"
              >
                <p className="text-sm">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-paleta-darkBrown font-medium hover:underline"
                  >
                    {item.project}
                  </a>: {item.description}
                </p>
                <p className="text-xs text-paleta-mediumBrown">{item.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 