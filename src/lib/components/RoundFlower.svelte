<script lang="ts">
	interface Props {
		color: string;
		trait: string;
		blooming: boolean;
	}

	let { color, trait, blooming }: Props = $props();

	const petalCount = 6;
	const petals = Array.from({ length: petalCount }, (_, i) => i * (360 / petalCount));
</script>

<div class="flower-wrapper" class:blooming>
	<svg viewBox="0 0 100 200" width="100" height="200" aria-hidden="true">
		<!-- Stem -->
		<line
			x1="50"
			y1="200"
			x2="50"
			y2="90"
			stroke="var(--sage)"
			stroke-width="3"
			stroke-linecap="round"
			class="stem"
		/>

		<!-- Leaf -->
		<ellipse
			cx="38"
			cy="155"
			rx="14"
			ry="6"
			fill="var(--sage)"
			transform="rotate(-30 38 155)"
			class="leaf"
		/>

		<!-- Flower head -->
		<g transform="translate(50, 75)">
			{#each petals as angle, i}
				<g transform="rotate({angle})">
					<ellipse
						cx="0"
						cy="-16"
						rx="9"
						ry="16"
						fill={color}
						opacity="0.85"
						class="petal"
						style="animation-delay: {0.8 + i * 0.08}s"
					/>
				</g>
			{/each}

			<circle cx="0" cy="0" r="7" fill="var(--gold)" class="center" />
			<circle cx="0" cy="0" r="3.5" fill="var(--dark-sage)" opacity="0.3" class="center-inner" />
		</g>
	</svg>

	{#if blooming}
		<p class="trait-text">{trait}</p>
	{/if}
</div>

<style>
	.flower-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.stem {
		stroke-dasharray: 120;
		stroke-dashoffset: 120;
	}

	.leaf {
		transform-origin: 38px 155px;
		transform: rotate(-30deg) scale(0);
	}

	.petal {
		transform: scale(0);
		transform-origin: center;
	}

	.center,
	.center-inner {
		transform: scale(0);
		transform-origin: center;
	}

	.blooming .stem {
		animation: draw-stem 0.8s ease forwards;
	}

	.blooming .leaf {
		animation: grow-leaf 0.4s ease forwards;
		animation-delay: 0.6s;
	}

	.blooming .petal {
		animation: bloom-petal 0.5s ease forwards;
	}

	.blooming .center {
		animation: pop-center 0.3s ease forwards;
		animation-delay: 1.3s;
	}

	.blooming .center-inner {
		animation: pop-center 0.3s ease forwards;
		animation-delay: 1.4s;
	}

	.trait-text {
		font-family: var(--font-heading);
		font-size: 0.9rem;
		color: var(--dark-sage);
		text-align: center;
		font-weight: 600;
		animation: fade-in 0.5s ease forwards;
		animation-delay: 1.6s;
		opacity: 0;
	}

	@keyframes draw-stem {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes grow-leaf {
		from { transform: rotate(-30deg) scale(0); }
		to { transform: rotate(-30deg) scale(1); }
	}

	@keyframes bloom-petal {
		from { transform: scale(0); }
		to { transform: scale(1); }
	}

	@keyframes pop-center {
		0% { transform: scale(0); }
		70% { transform: scale(1.2); }
		100% { transform: scale(1); }
	}

	@keyframes fade-in {
		to { opacity: 1; }
	}

	@media (prefers-reduced-motion: reduce) {
		.stem { stroke-dashoffset: 0; }
		.leaf { transform: rotate(-30deg) scale(1); }
		.petal { transform: scale(1); }
		.center, .center-inner { transform: scale(1); }
		.trait-text { opacity: 1; }

		.blooming .stem,
		.blooming .leaf,
		.blooming .petal,
		.blooming .center,
		.blooming .center-inner,
		.trait-text {
			animation: none;
		}
	}
</style>
