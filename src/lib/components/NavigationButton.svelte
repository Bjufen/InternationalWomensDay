<script lang="ts">
	import { base } from '$app/paths';

	interface Props {
		href: string;
		label: string;
		icon: 'garten' | 'horoskop' | 'galerie';
	}

	let { href, label, icon }: Props = $props();
</script>

<a class="nav-button" href="{base}{href}">
	<span class="nav-icon">
		{#if icon === 'garten'}
			<!-- Flower pot -->
			<svg viewBox="0 0 64 64" width="48" height="48" aria-hidden="true">
				<rect x="18" y="38" width="28" height="20" rx="3" fill="var(--blush)" stroke="var(--dark-sage)" stroke-width="1.5" />
				<path d="M32 38 Q32 20 22 14" fill="none" stroke="var(--sage)" stroke-width="2.5" stroke-linecap="round" />
				<path d="M32 38 Q32 22 40 16" fill="none" stroke="var(--sage)" stroke-width="2.5" stroke-linecap="round" />
				<circle cx="22" cy="12" r="5" fill="var(--blush)" />
				<circle cx="40" cy="14" r="5" fill="var(--blush)" />
				<circle cx="32" cy="10" r="5.5" fill="var(--gold)" opacity="0.8" />
				<circle cx="32" cy="10" r="2" fill="var(--dark-sage)" opacity="0.4" />
			</svg>
		{:else if icon === 'horoskop'}
			<!-- Crystal ball -->
			<svg viewBox="0 0 64 64" width="48" height="48" aria-hidden="true">
				<ellipse cx="32" cy="50" rx="16" ry="4" fill="var(--sage)" opacity="0.4" />
				<circle cx="32" cy="30" r="18" fill="none" stroke="var(--gold)" stroke-width="1.5" />
				<circle cx="32" cy="30" r="18" fill="var(--blush)" opacity="0.3" />
				<circle cx="26" cy="24" r="2" fill="var(--gold)" opacity="0.7" />
				<circle cx="36" cy="20" r="1.5" fill="var(--gold)" opacity="0.5" />
				<circle cx="30" cy="34" r="1" fill="var(--gold)" opacity="0.6" />
				<circle cx="38" cy="30" r="1.8" fill="var(--gold)" opacity="0.4" />
				<path d="M20 48 Q32 44 44 48" fill="var(--sage)" stroke="var(--dark-sage)" stroke-width="1" />
				<rect x="22" y="48" width="20" height="6" rx="2" fill="var(--sage)" stroke="var(--dark-sage)" stroke-width="1" />
			</svg>
		{:else}
			<!-- Picture frame -->
			<svg viewBox="0 0 64 64" width="48" height="48" aria-hidden="true">
				<rect x="10" y="8" width="44" height="48" rx="2" fill="none" stroke="var(--gold)" stroke-width="2" />
				<rect x="14" y="12" width="36" height="40" rx="1" fill="var(--blush)" opacity="0.3" />
				<path d="M14 40 L26 28 L34 36 L40 30 L50 40 L50 52 L14 52 Z" fill="var(--sage)" opacity="0.5" />
				<circle cx="40" cy="22" r="4" fill="var(--gold)" opacity="0.6" />
			</svg>
		{/if}
	</span>
	<span class="nav-label">{label}</span>
</a>

<style>
	.nav-button {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 16px 12px;
		border-radius: 12px;
		background: white;
		border: 1.5px solid var(--blush);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		min-width: 90px;
		min-height: 44px;
		text-decoration: none;
	}

	.nav-button:active {
		transform: scale(0.96);
	}

	.nav-button:hover {
		box-shadow: 0 2px 12px rgba(201, 169, 110, 0.2);
	}

	.nav-icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.nav-label {
		font-family: var(--font-heading);
		font-size: 0.9rem;
		color: var(--dark-sage);
		font-weight: 600;
	}
</style>
