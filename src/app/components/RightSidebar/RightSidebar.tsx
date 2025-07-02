"use client";

import { useEffect, useState } from 'react';
import { ActivityItem } from '../../types/github';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { SiTypescript, SiJavascript, SiDotnet } from 'react-icons/si';
import { SiReact, SiNextdotjs, SiExpress, SiSvelte } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { SiDocker, SiFirebase, SiGit } from 'react-icons/si';
import { SiPostgresql, SiMongodb, SiMysql } from 'react-icons/si';
import { skillCategoryNames, fallbackActivities, achievements, SkillCategory } from './staticData';

export const RightSidebar = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  const getIconForSkill = (skillName: string, colorClass: string) => {
    switch(skillName) {
      case 'TypeScript': return <SiTypescript className={colorClass} />;
      case 'JavaScript': return <SiJavascript className={colorClass} />;
      case 'C#': return <TbBrandCSharp className={colorClass} />;
      case 'React.js': return <SiReact className={colorClass} />;
      case 'Next.js': return <SiNextdotjs className={colorClass} />;
      case 'Express.js': return <SiExpress className={colorClass} />;
      case 'Svelte': return <SiSvelte className={colorClass} />;
      case 'ASP.NET Core': return <SiDotnet className={colorClass} />;
      case 'Docker': return <SiDocker className={colorClass} />;
      case 'Firebase': return <SiFirebase className={colorClass} />;
      case 'Git': return <SiGit className={colorClass} />;
      case 'PostgreSQL': return <SiPostgresql className={colorClass} />;
      case 'MongoDB': return <SiMongodb className={colorClass} />;
      case 'MySQL': return <SiMysql className={colorClass} />;
      default: return null;
    }
  };
  
  const initialSkillCategories: SkillCategory[] = skillCategoryNames.map(category => ({
    name: category.name,
    isOpen: category.isOpen,
    skills: category.skillNames.map(skill => ({
      name: skill.name,
      icon: getIconForSkill(skill.name, skill.color)
    }))
  }));
  
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(initialSkillCategories);
  
  const toggleCategory = (index: number) => {
    setSkillCategories(prev => 
      prev.map((category, i) => 
        i === index ? { ...category, isOpen: !category.isOpen } : category
      )
    );
  };

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
        setActivities(fallbackActivities);
      } finally {
        setLoading(false);
      }
    }

    fetchActivities();
  }, []);

  return (
    <div className="sticky top-4 space-y-4">
      <div className="bg-paleta-lightBrown p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-4 text-paleta-darkestBrown font-title">Skills</h3>
        <div className="space-y-2">
          {skillCategories.map((category, index) => (
            <div key={category.name} className="text-paleta-darkBrown">
              <div 
                className="flex items-center cursor-pointer hover:bg-paleta-lightestBrown p-2 rounded transition-colors"
                onClick={() => toggleCategory(index)}
              >
                <span className="mr-2 text-xl">
                  {category.isOpen ? <FcOpenedFolder /> : <FcFolder />}
                </span>
                <span className="font-medium">{category.name}</span>
              </div>
              
              {category.isOpen && (
                <div className="ml-6 mt-1 space-y-1">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="flex items-center p-1 hover:bg-paleta-lightestBrown rounded transition-colors"
                    >
                      <span className="mr-2 text-lg w-5 h-5 flex items-center justify-center">
                        {skill.icon}
                      </span>
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-paleta-lightBrown p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-3 text-paleta-darkestBrown font-title">Achievements</h3>
        <div className="grid grid-cols-3 gap-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className={`w-12 h-12 ${achievement.bgColor} rounded-full flex items-center justify-center text-xl mb-1 transition-transform duration-300 transform group-hover:scale-110 ${achievement.textColor || ''}`}>
                {achievement.icon}
              </div>
              <span className="text-xs text-center text-paleta-darkBrown group-hover:font-bold transition-all duration-300">
                {achievement.title}
              </span>
            </div>
          ))}
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