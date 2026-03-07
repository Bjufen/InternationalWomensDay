<script lang="ts">
	import { base } from '$app/paths';
	import Seed from '$lib/components/Seed.svelte';
	import { flowers } from '$lib/data/flowers';
	import { shuffle } from '$lib/utils/shuffle';

	const shuffled = shuffle(flowers);
</script>

<svelte:head>
	<title>Digitaler Garten — Für Tatjana</title>
</svelte:head>

<main class="garden">
	<a href="{base}/" class="back-link" aria-label="Zurück zur Startseite">← Zurück</a>
	<header>
		<h1>Dein Garten</h1>
		<p class="intro">Tippe auf die Samen und lass deinen Garten erblühen.</p>
	</header>

	<div class="seed-grid">
		{#each shuffled as flower (flower.trait)}
			<Seed trait={flower.trait} description={flower.description} color={flower.color} type={flower.type} />
		{/each}
	</div>
</main>

<style>
	.garden {
		max-width: 480px;
		margin: 0 auto;
		padding: 24px 16px 32px;
	}

	.back-link {
		display: inline-block;
		font-family: var(--font-body);
		font-size: 0.85rem;
		color: var(--sage);
		margin-bottom: 16px;
		padding: 8px 4px;
		min-height: 44px;
		line-height: 28px;
	}

	header {
		text-align: center;
		margin-bottom: 32px;
	}

	header h1 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark-sage);
		margin-bottom: 8px;
	}

	.intro {
		font-size: 0.9rem;
		color: var(--sage);
		font-style: italic;
	}

	.seed-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 8px;
	}

	@media (max-width: 360px) {
		.seed-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
