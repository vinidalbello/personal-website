export interface NavLink {
	label: string;
	href: string;
}

export interface Skill {
	name: string;
	category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
}

export interface Experience {
	period: string;
	role: string;
	company: string;
	description: string;
	technologies: string[];
}

export interface Project {
	title: string;
	description: string;
	image?: string;
	technologies: string[];
	github?: string;
	live?: string;
}
