<script lang="ts">
	import { base } from '$app/paths';
	import { useSwipe, type SwipeCustomEvent } from 'svelte-gestures';
	import GallerySlide from '$lib/components/GallerySlide.svelte';
	import { photos } from '$lib/data/gallery';

	let currentIndex = $state(0);
	const total = photos.length;

	function goTo(index: number) {
		if (index >= 0 && index < total) {
			currentIndex = index;
		}
	}

	function prev() {
		goTo(currentIndex - 1);
	}

	function next() {
		goTo(currentIndex + 1);
	}

	function handleSwipe(event: SwipeCustomEvent) {
		if (event.detail.direction === 'left') {
			next();
		} else if (event.detail.direction === 'right') {
			prev();
		}
	}
</script>

<svelte:head>
	<title>The Tatjana Exhibition — Für Tatjana</title>
</svelte:head>

<main class="gallery">
	<a href="{base}/" class="back-link" aria-label="Zurück zur Startseite">← Zurück</a>

	<header>
		<h1>The Tatjana Exhibition</h1>
		<p class="counter">{currentIndex + 1} von {total}</p>
	</header>

	<div
		class="gallery-viewport"
		{...useSwipe(handleSwipe, () => ({
			timeframe: 300,
			minSwipeDistance: 50,
			touchAction: 'pan-y'
		}))}
	>
		<div
			class="gallery-track"
			style="transform: translateX(-{currentIndex * 100}%)"
		>
			{#each photos as photo (photo.src)}
				<GallerySlide {photo} />
			{/each}
		</div>
	</div>

	<div class="controls">
		<button
			class="arrow-btn"
			onclick={prev}
			disabled={currentIndex === 0}
			aria-label="Vorheriges Foto"
		>
			←
		</button>
		<button
			class="arrow-btn"
			onclick={next}
			disabled={currentIndex === total - 1}
			aria-label="Nächstes Foto"
		>
			→
		</button>
	</div>
</main>

<style>
	.gallery {
		max-width: 480px;
		margin: 0 auto;
		padding: 24px 0 32px;
	}

	.back-link {
		display: inline-block;
		font-family: var(--font-body);
		font-size: 0.85rem;
		color: var(--sage);
		margin-bottom: 16px;
		padding: 8px 16px;
		min-height: 44px;
		line-height: 28px;
	}

	header {
		text-align: center;
		margin-bottom: 24px;
		padding: 0 16px;
	}

	header h1 {
		font-family: var(--font-heading);
		font-size: 1.8rem;
		color: var(--dark-sage);
		margin-bottom: 4px;
	}

	.counter {
		font-size: 0.85rem;
		color: var(--sage);
	}

	.gallery-viewport {
		overflow: hidden;
		width: 100%;
		touch-action: pan-y;
	}

	.gallery-track {
		display: flex;
		transition: transform 0.4s ease;
	}

	.gallery-track > :global(*) {
		min-width: 100%;
	}

	.controls {
		display: flex;
		justify-content: center;
		gap: 32px;
		margin-top: 10px;
		padding: 0 16px;
	}

	.arrow-btn {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: white;
		border: 1.5px solid var(--blush);
		font-size: 1.2rem;
		color: var(--dark-sage);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.2s ease, transform 0.2s ease;
	}

	.arrow-btn:disabled {
		opacity: 0.3;
		cursor: default;
	}

	.arrow-btn:not(:disabled):active {
		transform: scale(0.92);
	}
</style>
