import type { Experience } from '$lib/types';

export const experiences: Experience[] = [
	{
		period: 'Nov 2025 - Present',
		role: 'Mid-level Backend Developer',
		company: 'Clinicorp Solutions',
		description:
			'Build and maintain scalable microservices focused on Data Engineering (ETL), ensuring efficient ingestion and export of large data volumes across a distributed architecture. Develop APIs with Fastify and Express, manage persistence with PostgreSQL, Datastore and Cloud Storage on GCP, and orchestrate service communication via Pub/Sub.',
		technologies: ['Node.js', 'TypeScript', 'Fastify', 'Express', 'PostgreSQL', 'GCP', 'Pub/Sub', 'Docker']
	},
	{
		period: 'Aug 2023 - Oct 2025',
		role: 'Junior Full Stack Developer',
		company: 'Victoware',
		description:
			'Implemented real-time analytics with Firebase Events, Cloud Functions and SvelteKit. Automated lifecycle emails through AWS SES + Terraform. Shipped an MVP from scratch using SvelteKit, Express and Asaas payment API in under three months. Raised code reliability with Vitest and Playwright, exceeding 90% unit-test coverage.',
		technologies: ['SvelteKit', 'TypeScript', 'Node.js', 'PostgreSQL', 'Firebase', 'AWS SES', 'Playwright', 'Vitest']
	},
	{
		period: 'Sep 2021 - Dec 2021',
		role: 'Junior Full Stack Developer',
		company: 'Bom.capital',
		description:
			'Maintained and enhanced a credit-loan platform for small businesses, shipping new functionality across a React front-end and Elixir/Phoenix services. Modernized UI/UX in partnership with design, boosting user engagement on key loan-application pages.',
		technologies: ['React', 'Elixir', 'Phoenix', 'JavaScript']
	}
];
