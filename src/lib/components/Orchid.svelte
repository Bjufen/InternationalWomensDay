<script lang="ts">
	interface Props {
		color: string;
		trait: string;
		description: string;
		blooming: boolean;
	}

	let { color, trait, description, blooming }: Props = $props();
</script>

<div class="flower-wrapper" class:blooming>
	<svg viewBox="0 0 100 210" width="100" height="210" aria-hidden="true">
		<!-- Stem — straight up then graceful arc to the right -->
		<path
			d="M42 210 L42 120 Q42 95 55 80 Q62 72 65 65"
			fill="none"
			stroke="var(--sage)"
			stroke-width="2.5"
			stroke-linecap="round"
			class="stem"
		/>

		<!-- Left leaf — long, narrow, slightly curved -->
		<path
			d="M42 210 Q30 175 28 145 Q34 170 42 200"
			fill="var(--sage)"
			class="leaf leaf-left"
		/>

		<!-- Right leaf -->
		<path
			d="M42 205 Q54 172 56 145 Q50 168 42 195"
			fill="var(--sage)"
			class="leaf leaf-right"
		/>

		<!-- Drooping snowdrop head -->
		<g class="bloom">
			<!-- Three outer tepals — hanging down like a skirt -->
			<path
				d="M58 68 Q52 78 48 95 Q50 82 55 72 Z"
				fill="white"
				stroke={color}
				stroke-width="0.3"
			/>
			<path
				d="M65 65 Q68 78 72 94 Q68 80 65 68 Z"
				fill="white"
				stroke={color}
				stroke-width="0.3"
			/>
			<path
				d="M62 67 Q58 80 58 96 Q61 82 63 70 Z"
				fill="white"
				stroke={color}
				stroke-width="0.3"
			/>

			<!-- Inner bell — shorter, with green edge -->
			<path
				d="M56 72 Q55 80 56 86 Q59 90 63 90 Q66 86 67 80 Q68 72 66 68 Q62 66 56 72 Z"
				fill="white"
			/>

			<!-- Green V marking on inner bell -->
			<path
				d="M59 85 Q61 80 63 85"
				fill="none"
				stroke="var(--sage)"
				stroke-width="1.5"
				stroke-linecap="round"
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
		stroke-dasharray: 200;
		stroke-dashoffset: 200;
	}

	.leaf {
		opacity: 0;
	}

	.bloom {
		transform-origin: 62px 65px;
		transform: scale(0);
	}

	.blooming .stem {
		animation: draw-stem 1s ease forwards;
	}

	.blooming .leaf-left {
		animation: fade-in 0.4s ease forwards;
		animation-delay: 0.3s;
	}

	.blooming .leaf-right {
		animation: fade-in 0.4s ease forwards;
		animation-delay: 0.45s;
	}

	.blooming .bloom {
		animation: pop-bloom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
		animation-delay: 0.9s;
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

	.desc-text {
		font-family: var(--font-body);
		font-size: 0.75rem;
		color: var(--sage);
		text-align: center;
		line-height: 1.4;
		animation: fade-in 0.5s ease forwards;
		animation-delay: 1.9s;
		opacity: 0;
	}

	@keyframes draw-stem {
		to { stroke-dashoffset: 0; }
	}

	@keyframes pop-bloom {
		0% { transform: scale(0); }
		100% { transform: scale(1); }
	}

	@keyframes fade-in {
		to { opacity: 1; }
	}

	@media (prefers-reduced-motion: reduce) {
		.stem { stroke-dashoffset: 0; }
		.leaf { opacity: 1; }
		.bloom { transform: scale(1); }
		.trait-text, .desc-text { opacity: 1; }

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
