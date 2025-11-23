<script lang="ts">
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Daniel Goudie - Full-Stack Software Engineer</title>
	<meta name="theme-color" content="#252e3c" />
</svelte:head>

{@render children()}
