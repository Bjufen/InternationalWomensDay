<script lang="ts">
	interface Props {
		color: string;
		trait: string;
		description: string;
		blooming: boolean;
	}

	let { color, trait, description, blooming }: Props = $props();

	function darken(hex: string): string {
		const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - 35);
		const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - 35);
		const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - 35);
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
			y2="95"
			stroke="var(--sage)"
			stroke-width="3"
			stroke-linecap="round"
			class="stem"
		/>

		<!-- Left leaf — long, pointed -->
		<path
			d="M48 180 Q28 155 22 125 Q32 150 50 172 Z"
			fill="var(--sage)"
			class="leaf leaf-left"
		/>

		<!-- Right leaf -->
		<path
			d="M52 168 Q72 143 78 115 Q68 138 50 160 Z"
			fill="var(--sage)"
			class="leaf leaf-right"
		/>

		<!-- Lily bloom -->
		<g class="bloom">
			<!-- Back petals (3, curving outward) -->
			<path
				d="M50 95 Q35 70 25 42 Q32 60 50 80 Z"
				fill={darken(color)}
			/>
			<path
				d="M50 95 Q65 70 75 42 Q68 60 50 80 Z"
				fill={darken(color)}
			/>
			<path
				d="M50 95 Q50 65 50 35 Q55 65 53 90 Z"
				fill={darken(color)}
				opacity="0.7"
			/>

			<!-- Front petals (3, overlapping, curving outward) -->
			<path
				d="M50 90 Q30 65 20 48 Q35 62 50 78 Z"
				fill={color}
			/>
			<path
				d="M50 90 Q70 65 80 48 Q65 62 50 78 Z"
				fill={color}
			/>
			<path
				d="M50 90 Q48 60 47 40 Q52 60 52 85 Z"
				fill={color}
			/>

			<!-- Stamens -->
			<line x1="50" y1="88" x2="38" y2="62" stroke="var(--gold)" stroke-width="1" stroke-linecap="round" />
			<line x1="50" y1="88" x2="50" y2="58" stroke="var(--gold)" stroke-width="1" stroke-linecap="round" />
			<line x1="50" y1="88" x2="62" y2="62" stroke="var(--gold)" stroke-width="1" stroke-linecap="round" />

			<!-- Anther tips -->
			<ellipse cx="38" cy="60" rx="2" ry="3" fill="var(--gold)" />
			<ellipse cx="50" cy="56" rx="2" ry="3" fill="var(--gold)" />
			<ellipse cx="62" cy="60" rx="2" ry="3" fill="var(--gold)" />
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
		stroke-dasharray: 110;
		stroke-dashoffset: 110;
	}

	.leaf {
		opacity: 0;
	}

	.bloom {
		transform-origin: 50px 95px;
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
