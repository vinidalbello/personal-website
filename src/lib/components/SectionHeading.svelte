<script lang="ts">
	let { title, subtitle = '' }: { title: string; subtitle?: string } = $props();
</script>

<div class="mb-12">
	<div class="flex items-center gap-4 mb-4">
		<div class="w-1 h-8 bg-mint-500 rounded-full"></div>
		<h2 class="text-3xl md:text-4xl font-bold text-white">{title}</h2>
	</div>
	{#if subtitle}
		<p class="text-gray-400 ml-5">{subtitle}</p>
	{/if}
</div>
