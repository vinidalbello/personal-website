import type { Project } from '$lib/types';

export const projects: Project[] = [
	{
		title: 'Customer Order Manager',
		description:
			'Comprehensive system for customer registration and order management to track customers, manage product orders, and maintain inventory records efficiently.',
		technologies: ['SvelteKit', 'TypeScript'],
		github: 'https://github.com/vinidalbello/customer-order-manager'
	},
	{
		title: 'Real-Time Chat',
		description:
			'Real-time chat application developed using the WebSocket protocol, enabling instant messaging between users with a modern UI.',
		technologies: ['SvelteKit', 'TypeScript', 'WebSocket'],
		github: 'https://github.com/vinidalbello/real-time-chat'
	},
	{
		title: 'Table Management API',
		description:
			'API for restaurant systems to handle table management, built with C# following clean architecture principles.',
		technologies: ['C#', '.NET', 'REST API'],
		github: 'https://github.com/vinidalbello/table-management-api'
	},
	{
		title: 'Personal Website',
		description:
			'My personal portfolio website showcasing projects, skills, and experience with a clean, responsive design and smooth scroll animations.',
		technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
		github: 'https://github.com/vinidalbello/personal-website'
	}
];
