import type { Skill } from '$lib/types';

export const skills: Skill[] = [
	{ name: 'JavaScript', category: 'Frontend' },
	{ name: 'TypeScript', category: 'Frontend' },
	{ name: 'React', category: 'Frontend' },
	{ name: 'SvelteKit', category: 'Frontend' },
	{ name: 'Next.js', category: 'Frontend' },
	{ name: 'Tailwind CSS', category: 'Frontend' },

	{ name: 'Node.js', category: 'Backend' },
	{ name: 'Express', category: 'Backend' },
	{ name: 'Fastify', category: 'Backend' },
	{ name: 'Elixir', category: 'Backend' },
	{ name: 'Phoenix', category: 'Backend' },
	{ name: 'PHP', category: 'Backend' },
	{ name: 'PostgreSQL', category: 'Backend' },
	{ name: 'MySQL', category: 'Backend' },
	{ name: 'MongoDB', category: 'Backend' },

	{ name: 'Firebase', category: 'DevOps' },
	{ name: 'GCP', category: 'DevOps' },
	{ name: 'Docker', category: 'DevOps' },
	{ name: 'CI/CD', category: 'DevOps' },
	{ name: 'SonarQube', category: 'DevOps' },

	{ name: 'Git', category: 'Tools' },
	{ name: 'Cypress', category: 'Tools' },
	{ name: 'Playwright', category: 'Tools' },
	{ name: 'WebSocket', category: 'Tools' },
	{ name: 'Webhooks', category: 'Tools' }
];

export const skillCategories = ['Frontend', 'Backend', 'DevOps', 'Tools'] as const;
