import { ProjectItem } from '../../types/github';

export const fallbackProjects: ProjectItem[] = [
  {
    id: 1,
    title: "Customer Order Manager",
    description: "A comprehensive system for customer registration and order management. Allows businesses to track customers, manage product orders, and maintain inventory records efficiently.",
    tech: ["SvelteKit", "TypeScript", "PostgreSQL"],
    starred: true,
    url: "https://github.com/vinidalbello/customer-order-manager"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    starred: true,
    url: "https://github.com/vinidalbello/personal-website"
  },
  {
    id: 3,
    title: "Table Management API",
    description: "A RESTful API for managing tables in a restaurant. Allows for easy table creation, reservation, and management.",
    tech: ["C#", "ASP.NET Core", "Entity Framework Core", "PostgreSQL"],
    starred: false,
    url: "https://github.com/vinidalbello/table-management-api"
  },
];