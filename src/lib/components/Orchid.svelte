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
	<svg viewBox="0 0 100 200" width="100" height="200" aria-hidden="true">
		<!-- Straight stem going up -->
		<line
			x1="50"
			y1="200"
			x2="50"
			y2="85"
			stroke="var(--sage)"
			stroke-width="3"
			stroke-linecap="round"
			class="stem"
		/>

		<!-- Curved stem bending over -->
		<path
			d="M50 85 Q50 72 58 65 Q66 58 72 55"
			fill="none"
			stroke="var(--sage)"
			stroke-width="3"
			stroke-linecap="round"
			class="stem-bend"
		/>

		<!-- Narrow upright leaves from base -->
		<path
			d="M48 200 Q42 165 40 140 Q44 160 50 190 Z"
			fill="var(--sage)"
			class="leaf leaf-left"
		/>
		<path
			d="M52 200 Q58 165 60 140 Q56 160 50 190 Z"
			fill="var(--sage)"
			class="leaf leaf-right"
		/>

		<!-- Drooping flower head -->
		<g class="bloom">
			<!-- Three outer petals (tepals) drooping down -->
			<!-- Left outer petal -->
			<path
				d="M68 58 Q60 68 54 82 Q58 70 65 60 Z"
				fill={color}
				opacity="0.8"
			/>
			<!-- Right outer petal -->
			<path
				d="M76 58 Q82 68 84 82 Q80 70 76 60 Z"
				fill={color}
				opacity="0.8"
			/>
			<!-- Center outer petal -->
			<path
				d="M72 56 Q72 68 70 84 Q74 68 74 56 Z"
				fill={color}
				opacity="0.8"
			/>

			<!-- Inner bell (the distinctive snowdrop cup) -->
			<path
				d="M64 62 Q62 70 64 76 Q68 80 76 80 Q80 76 78 70 Q80 62 78 58 Q72 54 64 62 Z"
				fill="white"
				stroke={color}
				stroke-width="0.5"
			/>

			<!-- Green markings on inner petals (heart-shaped) -->
			<path
				d="M69 74 Q71 70 73 74 Q71 78 69 74 Z"
				fill="var(--sage)"
				opacity="0.7"
			/>

			<!-- Small green dot above -->
			<circle cx="71" cy="62" r="1.5" fill="var(--sage)" opacity="0.4" />
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
		stroke-dasharray: 120;
		stroke-dashoffset: 120;
	}

	.stem-bend {
		stroke-dasharray: 40;
		stroke-dashoffset: 40;
	}

	.leaf {
		opacity: 0;
	}

	.bloom {
		transform-origin: 72px 55px;
		transform: scale(0);
	}

	.blooming .stem {
		animation: draw-stem 0.7s ease forwards;
	}

	.blooming .stem-bend {
		animation: draw-bend 0.4s ease forwards;
		animation-delay: 0.6s;
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

	@keyframes draw-bend {
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
		.stem, .stem-bend { stroke-dashoffset: 0; }
		.leaf { opacity: 1; }
		.bloom { transform: scale(1); }
		.trait-text, .desc-text { opacity: 1; }

		.blooming .stem,
		.blooming .stem-bend,
		.blooming .leaf-left,
		.blooming .leaf-right,
		.blooming .bloom,
		.trait-text,
		.desc-text {
			animation: none;
		}
	}
</style>
