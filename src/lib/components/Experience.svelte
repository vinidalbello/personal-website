<script lang="ts">
	import { experiences } from '$lib/data/experience';
	import ScrollReveal from './ScrollReveal.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import TechBadge from './TechBadge.svelte';
</script>

<section id="experience" class="py-24">
	<div class="max-w-6xl mx-auto px-6">
		<ScrollReveal>
			<SectionHeading title="Experience" subtitle="My professional journey" />
		</ScrollReveal>

		<div class="relative ml-4 flex flex-col gap-10">
			<div class="absolute left-0 top-0 bottom-0 w-px bg-dark-600"></div>

			{#each experiences as exp, i}
				<ScrollReveal delay={i * 150}>
					{#if i > 0}
						<hr class="border-dark-600 ml-8 mb-10" />
					{/if}
					<div class="relative pl-8">
						<div class="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-mint-500 -translate-x-1"></div>

						<div class="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-mint-500/30 transition-colors">
							<div class="flex flex-wrap items-center gap-3 mb-2">
								<span class="text-sm font-mono text-mint-500">{exp.period}</span>
								<span class="text-dark-600">|</span>
								<span class="text-sm text-gray-400">{exp.company}</span>
							</div>
							<h3 class="text-lg font-semibold text-white mb-3">{exp.role}</h3>
							<p class="text-gray-400 mb-4">{exp.description}</p>
							<div class="flex flex-wrap gap-2">
								{#each exp.technologies as tech}
									<TechBadge name={tech} />
								{/each}
							</div>
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>
