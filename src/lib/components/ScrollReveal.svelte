<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, delay = 0 }: { children: Snippet; delay?: number } = $props();

	let element: HTMLDivElement | undefined = $state();
	let visible = $state(false);

	$effect(() => {
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				visible = entry.isIntersecting;
			},
			{ threshold: 0.1 }
		);

		observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<div
	bind:this={element}
	class="transition-all duration-700 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
	style="transition-delay: {delay}ms"
>
	{@render children()}
</div>
