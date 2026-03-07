<script lang="ts">
	import { base } from '$app/paths';
	import ZodiacDecoration from '$lib/components/ZodiacDecoration.svelte';
	import { horoscope } from '$lib/data/horoscope';
</script>

<svelte:head>
	<title>Horoskop — Für Tatjana</title>
</svelte:head>

<main class="horoskop">
	<a href="{base}/" class="back-link" aria-label="Zurück zur Startseite">← Zurück</a>

	<ZodiacDecoration />

	<div class="card">
		<div class="card-symbol">{horoscope.symbol}</div>
		<h1>{horoscope.title}</h1>
		<p class="sign-info">{horoscope.sign} · {horoscope.dateRange}</p>

		<div class="divider"></div>

		{#each horoscope.text as paragraph}
			<p class="horoscope-text">{paragraph}</p>
		{/each}
	</div>
</main>

<style>
	.horoskop {
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

	.card {
		background: white;
		border-radius: 16px;
		padding: 32px 24px;
		border: 1.5px solid var(--blush);
		text-align: center;
		margin-top: 8px;
	}

	.card-symbol {
		font-size: 3rem;
		margin-bottom: 8px;
		color: var(--gold);
	}

	.card h1 {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		color: var(--dark-sage);
		margin-bottom: 4px;
	}

	.sign-info {
		font-size: 0.85rem;
		color: var(--sage);
		font-style: italic;
		margin-bottom: 16px;
	}

	.divider {
		width: 40px;
		height: 1.5px;
		background: var(--gold);
		margin: 0 auto 20px;
	}

	.horoscope-text {
		font-size: 0.95rem;
		line-height: 1.7;
		color: var(--dark-sage);
		text-align: left;
		margin-bottom: 16px;
	}

	.horoscope-text:last-child {
		margin-bottom: 0;
	}
</style>
