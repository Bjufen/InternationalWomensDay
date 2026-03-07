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

	onMount(() => {
		let i = 0;

		const typeInterval = setInterval(() => {
			if (i < text.length) {
				displayed += text[i];
				i++;
			} else {
				clearInterval(typeInterval);
				done = true;
			}
		}, speed);

		const cursorInterval = setInterval(() => {
			showCursor = !showCursor;
		}, 530);

		return () => {
			clearInterval(typeInterval);
			clearInterval(cursorInterval);
		};
	});
</script>

<div class="typewriter" aria-label={text}>
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
