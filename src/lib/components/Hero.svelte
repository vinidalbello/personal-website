<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<section id="hero" class="relative min-h-screen flex items-center pt-16 overflow-hidden">
	<div
		class="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
		style="background-image: url('/me-professional-photo.png'); background-position: center 20%;"
	></div>
	<div class="absolute inset-0 md:hidden bg-gradient-to-b from-dark-950/70 via-dark-950/80 to-dark-950"></div>

	<div class="relative max-w-6xl mx-auto px-6 w-full">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div>
				<ScrollReveal>
					<p class="font-mono text-mint-500 mb-4">Hello, I'm</p>
				</ScrollReveal>

				<ScrollReveal delay={100}>
					<h1 class="text-5xl lg:text-7xl font-bold text-white mb-4">
						Vinicius<br />Dal Bello
					</h1>
				</ScrollReveal>

				<ScrollReveal delay={200}>
					<p class="text-xl md:text-2xl text-gray-400 mb-8">Full Stack Developer</p>
				</ScrollReveal>

				<ScrollReveal delay={300}>
					<div class="flex flex-wrap gap-4 mb-8">
						<a
							href="#contact"
							class="px-6 py-3 bg-mint-500 text-dark-950 font-medium rounded-lg hover:bg-mint-400 transition-colors"
						>
							Get In Touch
						</a>
						<a
							href="/resume/ViniciusResume.pdf"
							download
							class="px-6 py-3 border border-mint-500 text-mint-500 font-medium rounded-lg hover:bg-mint-500/10 transition-colors"
						>
							Download CV
						</a>
					</div>
				</ScrollReveal>

				<ScrollReveal delay={400}>
					<SocialLinks />
				</ScrollReveal>
			</div>

			<div class="hidden md:flex justify-center">
				<ScrollReveal delay={200}>
					<div class="relative">
						<div class="w-64 lg:w-96 h-64 lg:h-96 rounded-full overflow-hidden border-2 border-mint-500/30 ring-4 ring-mint-500/10 ring-offset-4 ring-offset-dark-950">
							<img
								src="/me-professional-photo.png"
								alt="Vinicius Dal Bello"
								class="w-full h-full object-cover scale-125"
								style="object-position: center 40%;"
							/>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</div>
	</div>
</section>
