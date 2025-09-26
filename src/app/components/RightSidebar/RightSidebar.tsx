"use client";

import { useState } from 'react';
import { ActivityItem } from '../../types/github';
import { FcFolder, FcOpenedFolder } from 'react-icons/fc';
import { SiTypescript, SiJavascript, SiDotnet } from 'react-icons/si';
import { SiReact, SiNextdotjs, SiExpress, SiSvelte } from 'react-icons/si';
import { SiDocker, SiFirebase, SiGit, SiPostgresql, SiMongodb, SiAmazons3, SiC } from 'react-icons/si';
import { skillCategoryNames, achievements, SkillCategory } from './staticData';
import { Skills } from '../../types/enums';

export const RightSidebar = ({ activities }: { activities: ActivityItem[] }) => {
  
  const getIconForSkill = (skillName: string, colorClass: string) => {
    switch(skillName) {
      case Skills.TYPESCRIPT: return <SiTypescript className={colorClass} />;
      case Skills.JAVASCRIPT: return <SiJavascript className={colorClass} />;
      case Skills.REACT: return <SiReact className={colorClass} />;
      case Skills.NEXT: return <SiNextdotjs className={colorClass} />;
      case Skills.EXPRESS: return <SiExpress className={colorClass} />;
      case Skills.SVELTE: return <SiSvelte className={colorClass} />;
      case Skills.ASPNET: return <SiDotnet className={colorClass} />;
      case Skills.DOCKER: return <SiDocker className={colorClass} />;
      case Skills.FIREBASE: return <SiFirebase className={colorClass} />;
      case Skills.GIT: return <SiGit className={colorClass} />;
      case Skills.POSTGRESQL: return <SiPostgresql className={colorClass} />;
      case Skills.MONGODB: return <SiMongodb className={colorClass} />;
      case Skills.AWS: return <SiAmazons3 className={colorClass} />;
      case Skills.C: return <SiC className={colorClass} />;
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

  return (
    <div className="sticky top-4 space-y-4">
      <div className="bg-paleta-darkGray p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-4 text-paleta-lightGray font-title">Skills</h3>
        <div className="space-y-2">
          {skillCategories.map((category, index) => (
            <div key={category.name} className="text-paleta-white">
              <div 
                className="flex items-center cursor-pointer hover:bg-paleta-nearBlack p-2 rounded transition-colors"
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
                      className="flex items-center p-1 hover:bg-paleta-nearBlack rounded transition-colors"
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

      <div className="bg-paleta-darkGray p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-3 text-paleta-lightGray font-title">Achievements</h3>
        <div className="grid grid-cols-3 gap-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className={`w-12 h-12 ${achievement.bgColor} rounded-full flex items-center justify-center text-xl mb-1 transition-transform duration-300 transform group-hover:scale-110 ${achievement.textColor || ''}`}>
                {achievement.icon}
              </div>
              <span className="text-xs text-center text-paleta-white group-hover:font-bold transition-all duration-300">
                {achievement.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-paleta-darkGray p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
        <h3 className="text-lg font-semibold mb-3 text-paleta-lightGray font-title">Latest Activity</h3>
         
          <div className="space-y-3">
            {activities.map((item, index) => (
              <div 
                key={index} 
                className="border-l-2 border-paleta-accentGreen pl-3 py-1 hover:border-paleta-white transition-colors duration-300 transform hover:translate-x-1"
              >
                <p className="text-sm">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-paleta-white font-medium hover:underline"
                  >
                    {item.project}
                  </a>: {item.description}
                </p>
                <p className="text-xs text-paleta-accentGreen">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};