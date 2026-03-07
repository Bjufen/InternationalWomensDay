<script lang="ts">
	import { base } from '$app/paths';
	import type { GalleryPhoto } from '$lib/data/gallery';

	interface Props {
		photo: GalleryPhoto;
	}

	let { photo }: Props = $props();
</script>

<div class="slide">
	<div class="photo-frame">
		<img src="{base}/{photo.src}" alt={photo.alt} loading="lazy" />
	</div>
	<div class="placard">
		<h2>{photo.title}</h2>
		<p>{photo.description}</p>
	</div>
</div>

<style>
	.slide {
		width: 100%;
		flex-shrink: 0;
		padding: 0 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.photo-frame {
		width: 100%;
		max-width: 400px;
		aspect-ratio: 3 / 4;
		border-radius: 8px;
		overflow: hidden;
		background: var(--blush);
		border: 2px solid var(--gold);
	}

	.photo-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.placard {
		background: var(--cream);
		border: 1.5px solid var(--gold);
		border-radius: 8px;
		padding: 16px 20px;
		margin-top: 16px;
		max-width: 360px;
		width: 100%;
		text-align: center;
	}

	.placard h2 {
		font-family: var(--font-heading);
		font-size: 1.1rem;
		color: var(--dark-sage);
		margin-bottom: 4px;
	}

	.placard p {
		font-size: 0.85rem;
		color: var(--sage);
		line-height: 1.5;
	}
</style>
