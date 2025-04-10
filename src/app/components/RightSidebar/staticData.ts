import { ReactNode } from 'react';

export type Skill = {
  name: string;
  icon: ReactNode;
};

export type SkillCategory = {
  name: string;
  isOpen: boolean;
  skills: Skill[];
};

export const skillCategoryNames = [
  {
    name: "Languages",
    isOpen: true,
    skillNames: [
      { name: "TypeScript", color: "text-blue-500" },
      { name: "JavaScript", color: "text-yellow-500" },
      { name: "PHP", color: "text-indigo-600" },
      { name: "Elixir", color: "text-purple-600" }
    ]
  },
  {
    name: "Frameworks",
    isOpen: false,
    skillNames: [
      { name: "React.js", color: "text-blue-400" },
      { name: "Next.js", color: "text-gray-900" },
      { name: "Express.js", color: "text-gray-800" },
      { name: "Phoenix", color: "text-orange-600" },
      { name: "Svelte", color: "text-red-500" }
    ]
  },
  {
    name: "Infrastructure",
    isOpen: false,
    skillNames: [
      { name: "Docker", color: "text-blue-600" },
      { name: "Firebase", color: "text-red-500" },
      { name: "Git", color: "text-red-500" }
    ]
  },
  {
    name: "Databases",
    isOpen: false,
    skillNames: [
      { name: "PostgreSQL", color: "text-blue-700" },
      { name: "MongoDB", color: "text-green-600" },
      { name: "MySQL", color: "text-blue-500" }
    ]
  }
];

export const achievements = [
  {
    icon: "🏆",
    title: "Top Contributor",
    bgColor: "bg-paleta-mediumBrown"
  },
  {
    icon: "🚀",
    title: "Fast Learner",
    bgColor: "bg-paleta-darkBrown"
  },
  {
    icon: "🔧",
    title: "Problem Solver",
    bgColor: "bg-paleta-darkestBrown",
    textColor: "text-paleta-lightestBrown"
  }
];

export const fallbackActivities = [
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