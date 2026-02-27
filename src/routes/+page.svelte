<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Vinicius Dal Bello | Full Stack Developer</title>
	<meta name="description" content="Full Stack Developer portfolio - Vinicius Dal Bello" />
</svelte:head>

<Navbar />

<main>
	<Hero />
	<About />
	<Experience />
	<Projects />
	<Contact />
</main>

<Footer />
