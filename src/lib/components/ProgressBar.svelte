<div class="footer-message">
	<p>Für dich. Damals, Heute, und wann immer du willst.</p>
</div>

<style>
	.footer-message {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: var(--cream);
		border-top: 1px solid var(--blush);
		padding: 10px 16px;
		padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));
		z-index: 100;
	}

	.footer-message p {
		font-family: var(--font-heading);
		font-size: 0.85rem;
		text-align: center;
		color: var(--gold);
	}
</style>
