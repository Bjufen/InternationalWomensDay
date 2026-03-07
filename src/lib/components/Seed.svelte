<script lang="ts">
	import Tulip from './Tulip.svelte';
	import RoundFlower from './RoundFlower.svelte';
	import Orchid from './Orchid.svelte';
	import type { FlowerType } from '$lib/data/flowers';

	interface Props {
		trait: string;
		description: string;
		color: string;
		type: FlowerType;
	}

	let { trait, description, color, type }: Props = $props();
	let blooming = $state(false);

	function handleClick() {
		if (!blooming) {
			blooming = true;
		}
	}
</script>

<div class="seed-container">
	{#if blooming}
		{#if type === 'tulip'}
			<Tulip {color} {trait} {description} {blooming} />
		{:else if type === 'orchid'}
			<Orchid {color} {trait} {description} {blooming} />
		{:else}
			<RoundFlower {color} {trait} {description} {blooming} />
		{/if}
	{:else}
		<button
			class="seed"
			onclick={handleClick}
			aria-label="Klicke um eine Blume wachsen zu lassen"
		>
			<svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
				<ellipse cx="20" cy="22" rx="10" ry="12" fill="var(--dark-sage)" opacity="0.6" />
				<ellipse cx="20" cy="20" rx="9" ry="11" fill="var(--sage)" />
				<path d="M20 14 Q22 18 20 22 Q18 18 20 14" fill="var(--dark-sage)" opacity="0.3" />
			</svg>
		</button>
	{/if}
</div>

<style>
	.seed-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: column;
		height: 290px;
	}

	.seed {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 16px;
		min-width: 44px;
		min-height: 44px;
		cursor: pointer;
		transition: transform 0.2s ease;
	}

	.seed:active {
		transform: scale(0.9);
	}

</style>
