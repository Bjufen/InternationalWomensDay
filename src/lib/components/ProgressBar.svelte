<script lang="ts">
	import { onMount } from 'svelte';
	import { getProgress } from '$lib/utils/progress';
	import { config } from '$lib/config';

	let progress = $state(0);
	let mounted = $state(false);

	onMount(() => {
		progress = getProgress();
		mounted = true;

		const interval = setInterval(() => {
			progress = getProgress();
		}, 60_000);

		return () => clearInterval(interval);
	});

	const isComplete = $derived(progress >= 100);
	const message = $derived(
		isComplete ? config.messages.complete : `${config.messages.loading} ${progress}%`
	);
</script>

{#if mounted}
	<div class="progress-bar" role="status" aria-live="polite">
		<div class="progress-track">
			<div class="progress-fill" style="width: {progress}%"></div>
		</div>
		<p class="progress-text" class:complete={isComplete}>{message}</p>
	</div>
{/if}

<style>
	.progress-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: var(--cream);
		border-top: 1px solid var(--blush);
		padding: 8px 16px;
		padding-bottom: calc(8px + env(safe-area-inset-bottom, 0px));
		z-index: 100;
	}

	.progress-track {
		width: 100%;
		height: 6px;
		background: var(--blush);
		border-radius: 3px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: var(--gold);
		border-radius: 3px;
		transition: width 1s ease;
	}

	.progress-text {
		font-family: var(--font-body);
		font-size: 0.8rem;
		text-align: center;
		margin-top: 4px;
		color: var(--dark-sage);
	}

	.progress-text.complete {
		font-weight: 600;
		color: var(--gold);
	}
</style>
