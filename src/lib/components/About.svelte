<script lang="ts">
	import { skills, skillCategories } from '$lib/data/skills';
	import ScrollReveal from './ScrollReveal.svelte';
	import SectionHeading from './SectionHeading.svelte';
	import TechBadge from './TechBadge.svelte';
</script>

<section id="about" class="py-24">
	<div class="max-w-6xl mx-auto px-6">
		<ScrollReveal>
			<SectionHeading title="About Me" subtitle="A bit about my background and skills" />
		</ScrollReveal>

		<div class="grid md:grid-cols-2 gap-12">
			<div class="space-y-4">
				<ScrollReveal>
					<p>
						Full Stack Developer with 3+ years of hands-on experience in SvelteKit,
						Node, React and Next. I focus every technical decision on delivering
						customer value and producing clean, easy-to-maintain code for fellow
						developers.
					</p>
				</ScrollReveal>
				<ScrollReveal delay={100}>
					<p>
						Skilled at collaborating with cross-functional teams, delivering scalable
						solutions, and effectively communicating with stakeholders. Adept in modern
						front-end frameworks, backend architectures, and cloud services.
					</p>
				</ScrollReveal>
				<ScrollReveal delay={200}>
					<p>
						Currently pursuing a Bachelor's Degree in Computer Science at Unisociesc
						and always eager to learn new tools and approaches that make development
						more efficient and enjoyable.
					</p>
				</ScrollReveal>
			</div>

			<div class="space-y-6">
				{#each skillCategories as category, i}
					<ScrollReveal delay={i * 100}>
						<div>
							<h3 class="text-sm font-mono text-mint-500 uppercase tracking-wider mb-3">
								{category}
							</h3>
							<div class="flex flex-wrap gap-2">
								{#each skills.filter((s) => s.category === category) as skill}
									<TechBadge name={skill.name} />
								{/each}
							</div>
						</div>
					</ScrollReveal>
				{/each}
			</div>
		</div>
	</div>
</section>
