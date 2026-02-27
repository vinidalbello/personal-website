<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ScrollReveal from './ScrollReveal.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import TechBadge from './TechBadge.svelte';
</script>

<section id="projects" class="py-24">
	<div class="max-w-6xl mx-auto px-6">
		<ScrollReveal>
			<SectionHeading title="Projects" subtitle="Some things I've built" />
		</ScrollReveal>

		<div class="grid md:grid-cols-2 gap-6">
			{#each projects as project, i}
				<ScrollReveal delay={i * 100}>
					<div class="group bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-mint-500/30 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
						<h3 class="text-lg font-semibold text-white mb-3 group-hover:text-mint-500 transition-colors">
							{project.title}
						</h3>
						<p class="text-gray-400 mb-4 flex-1">{project.description}</p>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.technologies as tech}
								<TechBadge name={tech} />
							{/each}
						</div>
						<div class="flex gap-4">
							{#if project.github}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
									class="text-sm text-gray-400 hover:text-mint-500 transition-colors flex items-center gap-1"
								>
									<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
									</svg>
									Code
								</a>
							{/if}
							{#if project.live}
								<a
									href={project.live}
									target="_blank"
									rel="noopener noreferrer"
									class="text-sm text-gray-400 hover:text-mint-500 transition-colors flex items-center gap-1"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
									Live
								</a>
							{/if}
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
