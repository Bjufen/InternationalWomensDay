<script lang="ts">
	interface Props {
		color: string;
		trait: string;
		blooming: boolean;
	}

	let { color, trait, blooming }: Props = $props();
</script>

<div class="flower-wrapper" class:blooming>
	<svg viewBox="0 0 120 220" width="120" height="220" aria-hidden="true">
		<!-- Stem -->
		<path
			d="M60 220 Q58 170 60 110"
			fill="none"
			stroke="var(--sage)"
			stroke-width="3"
			stroke-linecap="round"
			class="stem"
		/>

		<!-- Left leaf -->
		<path
			d="M58 170 Q38 155 30 140 Q42 148 56 162"
			fill="var(--sage)"
			class="leaf leaf-left"
		/>

		<!-- Right leaf -->
		<path
			d="M62 150 Q82 135 90 120 Q78 128 64 142"
			fill="var(--sage)"
			class="leaf leaf-right"
		/>

		<!-- Tulip head -->
		<g transform="translate(60, 90)">
			<!-- Back petal (wider, behind) -->
			<path
				d="M-16 5 Q-18 -25 -8 -45 Q0 -55 8 -45 Q18 -25 16 5 Z"
				fill={color}
				opacity="0.6"
				class="petal"
				style="animation-delay: 0.8s"
			/>

			<!-- Left petal -->
			<path
				d="M-4 8 Q-22 -10 -20 -35 Q-16 -48 -6 -42 Q4 -30 2 0 Z"
				fill={color}
				opacity="0.85"
				class="petal"
				style="animation-delay: 0.9s"
			/>

			<!-- Right petal -->
			<path
				d="M4 8 Q22 -10 20 -35 Q16 -48 6 -42 Q-4 -30 -2 0 Z"
				fill={color}
				opacity="0.85"
				class="petal"
				style="animation-delay: 1.0s"
			/>

			<!-- Center/front petal (overlapping) -->
			<path
				d="M-10 6 Q-12 -18 -4 -38 Q0 -44 4 -38 Q12 -18 10 6 Z"
				fill={color}
				class="petal"
				style="animation-delay: 1.1s"
			/>

			<!-- Inner highlight -->
			<path
				d="M-4 2 Q-5 -12 0 -28 Q5 -12 4 2 Z"
				fill="white"
				opacity="0.2"
				class="petal"
				style="animation-delay: 1.2s"
			/>
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
		opacity: 0;
	}

	.petal {
		transform: scale(0);
		transform-origin: center;
	}

	.blooming .stem {
		animation: draw-stem 0.8s ease forwards;
	}

	.blooming .leaf-left {
		animation: fade-in 0.4s ease forwards;
		animation-delay: 0.5s;
	}

	.blooming .leaf-right {
		animation: fade-in 0.4s ease forwards;
		animation-delay: 0.65s;
	}

	.blooming .petal {
		animation: bloom-petal 0.5s ease forwards;
	}

	.trait-text {
		font-family: var(--font-heading);
		font-size: 0.9rem;
		color: var(--dark-sage);
		text-align: center;
		font-weight: 600;
		animation: fade-in 0.5s ease forwards;
		animation-delay: 1.5s;
		opacity: 0;
	}

	@keyframes draw-stem {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes bloom-petal {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

	@keyframes fade-in {
		to {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.stem {
			stroke-dashoffset: 0;
		}

		.leaf {
			opacity: 1;
		}

		.petal {
			transform: scale(1);
		}

		.trait-text {
			opacity: 1;
		}

		.blooming .stem,
		.blooming .leaf-left,
		.blooming .leaf-right,
		.blooming .petal,
		.trait-text {
			animation: none;
		}
	}
</style>
