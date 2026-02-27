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
	<meta name="description" content="Full Stack Developer with 3+ years of experience in SvelteKit, React and Node.js. Check out my projects and experience." />

	<meta property="og:title" content="Vinicius Dal Bello | Full Stack Developer" />
	<meta property="og:description" content="Full Stack Developer with 3+ years of experience in SvelteKit, React and Node.js. Check out my projects and experience." />
	<meta property="og:image" content="/me-pp.jpeg" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Vinicius Dal Bello | Full Stack Developer" />
	<meta name="twitter:description" content="Full Stack Developer with 3+ years of experience in SvelteKit, React and Node.js. Check out my projects and experience." />
	<meta name="twitter:image" content="/me-pp.jpeg" />
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
