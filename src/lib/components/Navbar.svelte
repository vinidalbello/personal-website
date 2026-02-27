<script lang="ts">
	import { navLinks } from '$lib/data/navigation';

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark-950/80 border-b border-dark-700">
	<div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
		<a href="#hero" class="text-xl font-bold">
			<span class="text-mint-500">V</span><span class="text-white">DB</span>
		</a>

		<div class="hidden md:flex items-center gap-8">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-sm text-gray-400 hover:text-mint-500 transition-colors"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-4">
			<a
				href="/resume/ViniciusResume.pdf"
				download
				class="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-mint-500 text-dark-950 rounded-lg hover:bg-mint-400 transition-colors"
			>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
				CV
			</a>

			<button
				class="md:hidden text-gray-400 hover:text-white transition-colors"
				onclick={() => (menuOpen = !menuOpen)}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if menuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if menuOpen}
		<div class="md:hidden border-t border-dark-700 bg-dark-950/95 backdrop-blur-md">
			<div class="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
				{#each navLinks as link}
					<a
						href={link.href}
						class="text-gray-400 hover:text-mint-500 transition-colors"
						onclick={closeMenu}
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/resume/ViniciusResume.pdf"
					download
					class="sm:hidden inline-flex items-center gap-2 text-mint-500 hover:text-mint-400 transition-colors"
				>
					Download CV
				</a>
			</div>
		</div>
	{/if}
</nav>
