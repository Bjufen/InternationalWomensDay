<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		text: string;
		speed?: number;
	}

	let { text, speed = 35 }: Props = $props();

	let displayed = $state('');
	let showCursor = $state(true);
	let done = $state(false);
	let taps = $state(0);
	let currentSpeed = $state(speed);
	let intervalId: ReturnType<typeof setInterval> | null = null;
	let charIndex = 0;

	function handleTap() {
		if (done) return;
		taps++;
		if (taps === 1) {
			// Double speed
			currentSpeed = Math.round(speed / 2);
			restartInterval();
		} else if (taps >= 2) {
			// Reveal all
			displayed = text;
			done = true;
			if (intervalId) clearInterval(intervalId);
		}
	}

	function restartInterval() {
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(() => {
			if (charIndex < text.length) {
				displayed += text[charIndex];
				charIndex++;
			} else {
				if (intervalId) clearInterval(intervalId);
				done = true;
			}
		}, currentSpeed);
	}

	onMount(() => {
		restartInterval();

		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 530);

		return () => {
			if (intervalId) clearInterval(intervalId);
			clearInterval(cursorInterval);
		};
	});
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="typewriter" aria-label={text} onclick={handleTap}>
	<p class="typewriter-text">
		{#each displayed.split('\n') as line, i}
			{#if i > 0}<br />{/if}{line}
		{/each}
		<span class="cursor" class:visible={showCursor} class:done>|</span>
	</p>
</div>

<style>
	.typewriter {
		max-width: 560px;
		margin: 0 auto;
		cursor: pointer;
	}

	.typewriter-text {
		font-family: var(--font-body);
		font-size: 1rem;
		line-height: 1.8;
		color: var(--dark-sage);
		white-space: pre-wrap;
	}

	.cursor {
		opacity: 0;
		font-weight: 300;
		color: var(--gold);
	}

	.cursor.visible {
		opacity: 1;
	}

	.cursor.done {
		animation: fade-out 2s forwards;
		animation-delay: 1.5s;
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cursor {
			display: none;
		}
	}
</style>
