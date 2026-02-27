<script lang="ts">
	let { name }: { name: string } = $props();
</script>

<span
	class="inline-block px-3 py-1 text-xs font-mono bg-dark-700 text-mint-500 border border-dark-600 rounded-full transition-colors hover:border-mint-500/30"
>
	{name}
</span>
