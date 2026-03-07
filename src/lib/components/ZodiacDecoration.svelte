<svg class="zodiac-deco" viewBox="0 0 300 200" aria-hidden="true">
	<!-- Stars -->
	{#each stars as star}
		<circle
			cx={star.x}
			cy={star.y}
			r={star.r}
			fill="var(--gold)"
			opacity={star.opacity}
			class="star"
			style="animation-delay: {star.delay}s"
		/>
	{/each}

	<!-- Constellation lines -->
	<g stroke="var(--gold)" stroke-width="0.5" opacity="0.3">
		<line x1="80" y1="40" x2="120" y2="60" />
		<line x1="120" y1="60" x2="160" y2="45" />
		<line x1="160" y1="45" x2="200" y2="70" />
		<line x1="200" y1="70" x2="180" y2="100" />
		<line x1="180" y1="100" x2="220" y2="130" />
	</g>

	<!-- Large decorative star -->
	<g transform="translate(150, 100)" opacity="0.15">
		<polygon
			points="0,-30 8,-10 30,-10 12,4 20,26 0,14 -20,26 -12,4 -30,-10 -8,-10"
			fill="var(--gold)"
		/>
	</g>
</svg>

<script lang="ts">
	const stars = [
		{ x: 30, y: 30, r: 1.5, opacity: 0.6, delay: 0 },
		{ x: 80, y: 40, r: 2, opacity: 0.8, delay: 0.5 },
		{ x: 120, y: 60, r: 2, opacity: 0.7, delay: 1.2 },
		{ x: 160, y: 45, r: 1.8, opacity: 0.9, delay: 0.8 },
		{ x: 200, y: 70, r: 2, opacity: 0.7, delay: 1.5 },
		{ x: 180, y: 100, r: 1.5, opacity: 0.6, delay: 2 },
		{ x: 220, y: 130, r: 1.8, opacity: 0.8, delay: 0.3 },
		{ x: 50, y: 80, r: 1, opacity: 0.5, delay: 1.8 },
		{ x: 260, y: 50, r: 1.2, opacity: 0.4, delay: 1 },
		{ x: 270, y: 160, r: 1.5, opacity: 0.6, delay: 2.5 },
		{ x: 100, y: 150, r: 1, opacity: 0.5, delay: 1.4 },
		{ x: 40, y: 170, r: 1.3, opacity: 0.4, delay: 0.7 },
	];
</script>

<style>
	.zodiac-deco {
		width: 100%;
		max-width: 300px;
		height: auto;
		margin: 0 auto;
		display: block;
	}

	.star {
		animation: twinkle 3s ease-in-out infinite alternate;
	}

	@keyframes twinkle {
		0% {
			opacity: 0.3;
		}
		100% {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.star {
			animation: none;
		}
	}
</style>
