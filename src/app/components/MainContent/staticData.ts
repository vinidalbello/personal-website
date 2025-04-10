import { ProjectItem } from '../../types/github';

export type Game = {
  id: number;
  title: string;
  rating: number;
  imageUrl?: string;
  producer: string;
};

export type Book = {
  id: number;
  title: string;
  author: string;
  rating: number;
  url: string;
};

export const fallbackProjects: ProjectItem[] = [
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

export const games: Game[] = [
  {
    id: 1,
    title: "Red Dead Redemption 2",
    rating: 9.5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png",
    producer: "Rockstar Games"
  },
  {
    id: 2,
    title: "Elden Ring",
    rating: 9.0,
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/0/0d/Elden_Ring_capa.jpg",
    producer: "FromSoftware"
  },
];

export const books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    rating: 9.0,
    url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
  },
  {
    id: 2,
    title: "Can't Hurt Me",
    author: "David Goggins",
    rating: 8.5,
    url: "https://www.amazon.com/Cant-Hurt-Me-Master-Clean/dp/1544507879"
  },
  {
    id: 3,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    rating: 8.8,
    url: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034"
  },
]; 