<script lang="ts">
	interface Props {
		color: string;
		trait: string;
		description: string;
		blooming: boolean;
	}

	let { color, trait, description, blooming }: Props = $props();

	function darken(hex: string): string {
		const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 50);
		const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 50);
		const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 50);
		return `rgb(${r},${g},${b})`;
	}

	function lighten(hex: string): string {
		const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + 40);
		const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + 40);
		const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + 40);
		return `rgb(${r},${g},${b})`;
	}
</script>

<div class="flower-wrapper" class:blooming>
	<svg viewBox="0 0 100 200" width="100" height="200" aria-hidden="true">
		<!-- Stem — slightly curved -->
		<path
			d="M50 200 Q48 160 50 110"
			fill="none"
			stroke="var(--sage)"
			stroke-width="3"
			stroke-linecap="round"
			class="stem"
		/>

		<!-- Long orchid leaf (left) -->
		<path
			d="M48 185 Q22 165 15 135 Q25 155 50 175 Z"
			fill="var(--sage)"
			class="leaf leaf-left"
		/>

		<!-- Long orchid leaf (right) -->
		<path
			d="M52 175 Q78 155 85 125 Q75 145 50 165 Z"
			fill="var(--sage)"
			class="leaf leaf-right"
		/>

		<!-- Orchid bloom -->
		<g class="bloom">
			<!-- Back sepals (3 narrow petals radiating out) -->
			<!-- Top sepal -->
			<path
				d="M50 75 Q48 50 50 32 Q52 50 50 75"
				fill={lighten(color)}
				stroke={color}
				stroke-width="0.5"
				class="sepal"
			/>
			<!-- Bottom-left sepal -->
			<path
				d="M45 85 Q25 95 15 105 Q28 92 45 85"
				fill={lighten(color)}
				stroke={color}
				stroke-width="0.5"
				class="sepal"
			/>
			<!-- Bottom-right sepal -->
			<path
				d="M55 85 Q75 95 85 105 Q72 92 55 85"
				fill={lighten(color)}
				stroke={color}
				stroke-width="0.5"
				class="sepal"
			/>

			<!-- Side petals (2 wider, rounded) -->
			<!-- Left petal -->
			<path
				d="M46 78 Q28 60 22 52 Q26 65 42 80 Z"
				fill={color}
				class="petal"
			/>
			<!-- Right petal -->
			<path
				d="M54 78 Q72 60 78 52 Q74 65 58 80 Z"
				fill={color}
				class="petal"
			/>

			<!-- Lip (labellum) — the distinctive orchid center -->
			<path
				d="M40 82 Q42 92 50 98 Q58 92 60 82 Q55 88 50 86 Q45 88 40 82 Z"
				fill={darken(color)}
				class="lip"
			/>

			<!-- Column (center dot) -->
			<circle cx="50" cy="76" r="3" fill="var(--gold)" class="column" />

			<!-- Spots on lip -->
			<circle cx="47" cy="88" r="1" fill={color} opacity="0.5" class="spot" />
			<circle cx="53" cy="88" r="1" fill={color} opacity="0.5" class="spot" />
			<circle cx="50" cy="92" r="0.8" fill={color} opacity="0.4" class="spot" />
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
		transform-origin: 50px 80px;
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
		animation: pop-bloom 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
		animation-delay: 0.8s;
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
