<script lang="ts">
	interface Props {
		color: string;
		trait: string;
		description: string;
		blooming: boolean;
	}

	let { color, trait, description, blooming }: Props = $props();

	// Darker shade for depth
	function darken(hex: string): string {
		const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 40);
		const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 40);
		const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 40);
		return `rgb(${r},${g},${b})`;
	}
</script>

<div class="flower-wrapper" class:blooming>
	<svg viewBox="0 0 100 200" width="100" height="200" aria-hidden="true">
		<!-- Stem -->
		<line
			x1="50"
			y1="200"
			x2="50"
			y2="105"
			stroke="var(--sage)"
			stroke-width="3.5"
			stroke-linecap="round"
			class="stem"
		/>

		<!-- Left leaf — long curved tulip leaf -->
		<path
			d="M48 170 Q20 145 18 115 Q22 140 50 160 Z"
			fill="var(--sage)"
			class="leaf leaf-left"
		/>

		<!-- Right leaf -->
		<path
			d="M52 155 Q80 130 82 100 Q78 125 50 145 Z"
			fill="var(--sage)"
			class="leaf leaf-right"
		/>

		<!-- Tulip bloom -->
		<g class="bloom">
			<!-- Left petal -->
			<path
				d="M50 108 Q28 90 24 60 Q22 40 34 28 Q42 22 50 38 Z"
				fill={darken(color)}
				class="petal petal-1"
			/>

			<!-- Right petal -->
			<path
				d="M50 108 Q72 90 76 60 Q78 40 66 28 Q58 22 50 38 Z"
				fill={darken(color)}
				class="petal petal-2"
			/>

			<!-- Center petal (front, on top) -->
			<path
				d="M50 108 Q34 85 32 55 Q32 35 50 25 Q68 35 68 55 Q66 85 50 108 Z"
				fill={color}
				class="petal petal-3"
			/>
		</g>
	</svg>

	{#if blooming}
		<p class="trait-text">{trait}</p>
		<p class="desc-text">{description}</p>
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
		stroke-dasharray: 100;
		stroke-dashoffset: 100;
	}

	.leaf {
		opacity: 0;
	}

	.bloom {
		transform-origin: 50px 108px;
		transform: scale(0);
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

	.blooming .bloom {
		animation: pop-bloom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
		animation-delay: 0.8s;
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

	.desc-text {
		font-family: var(--font-body);
		font-size: 0.75rem;
		color: var(--sage);
		text-align: center;
		line-height: 1.4;
		animation: fade-in 0.5s ease forwards;
		animation-delay: 1.8s;
		opacity: 0;
	}

	@keyframes draw-stem {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes pop-bloom {
		0% {
			transform: scale(0);
		}
		100% {
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

		.bloom {
			transform: scale(1);
		}

		.trait-text,
		.desc-text {
			opacity: 1;
		}

		.blooming .stem,
		.blooming .leaf-left,
		.blooming .leaf-right,
		.blooming .bloom,
		.trait-text,
		.desc-text {
			animation: none;
		}
	}
</style>
