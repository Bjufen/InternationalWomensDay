<script lang="ts">
	import '../app.css';
	import ProgressBar from '$lib/components/ProgressBar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Für Tatjana — Internationaler Frauentag 2026</title>
</svelte:head>

{@render children()}
<ProgressBar />
