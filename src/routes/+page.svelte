<script lang="ts">
	import Typewriter from '$lib/components/Typewriter.svelte';
	import NavigationButton from '$lib/components/NavigationButton.svelte';
	import { letterText } from '$lib/data/letter';
</script>

<main class="homepage">
	<header class="hero">
		<h1>Für Tatjana</h1>
		<p class="subtitle">Zum Internationalen Frauentag 2026</p>
	</header>

	<section class="letter">
		<Typewriter text={letterText} />
	</section>

	<nav class="nav-grid" aria-label="Seitenbereiche">
		<NavigationButton href="/garten/" label="Garten" icon="garten" />
		<NavigationButton href="/horoskop/" label="Horoskop" icon="horoskop" />
		<NavigationButton href="/galerie/" label="Galerie" icon="galerie" />
	</nav>
</main>

<style>
	.homepage {
		max-width: 480px;
		margin: 0 auto;
		padding: 48px 24px 32px;
	}

	.hero {
		text-align: center;
		margin-bottom: 40px;
	}

	.hero h1 {
		font-family: var(--font-heading);
		font-size: 2.2rem;
		font-weight: 700;
		color: var(--dark-sage);
		margin-bottom: 8px;
	}

	.subtitle {
		font-family: var(--font-heading);
		font-style: italic;
		font-size: 1rem;
		color: var(--gold);
	}

	.letter {
		margin-bottom: 48px;
		padding: 0 4px;
	}

	.nav-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	}
</style>
