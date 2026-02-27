<script lang="ts">
	import ScrollReveal from './ScrollReveal.svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<section id="contact" class="py-24">
	<div class="max-w-6xl mx-auto px-6">
		<div class="max-w-2xl mx-auto text-center bg-dark-900/50 border border-dark-700 rounded-2xl p-12">
			<ScrollReveal>
				<p class="font-mono text-mint-500 mb-4">What's Next?</p>
			</ScrollReveal>

			<ScrollReveal delay={100}>
				<h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
			</ScrollReveal>

			<ScrollReveal delay={200}>
				<p class="text-gray-400 mb-8">
					I'm currently open to new opportunities and interesting projects.
					Whether you have a question or just want to say hi, feel free to reach out!
				</p>
			</ScrollReveal>

			<ScrollReveal delay={300}>
				<p class="font-mono text-gray-400 mb-6">vinicius.cej@gmail.com</p>
				<a
					href="mailto:vinicius.cej@gmail.com"
					class="inline-block px-8 py-3 bg-mint-500 text-dark-950 font-medium rounded-lg hover:bg-mint-400 transition-colors mb-8"
				>
					Say Hello
				</a>
			</ScrollReveal>

			<ScrollReveal delay={400}>
				<div class="flex justify-center">
					<SocialLinks />
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>
