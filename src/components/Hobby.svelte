<script lang="ts">
	const { name, children } = $props();
</script>

<div class="item">
	<h3>
		<div class="line"></div>
		<div class="text">{name}</div>
		<div class="line"></div>
	</h3>
	<p>{@render children()}</p>
</div>

<style lang="scss">
	.item h3 {
		margin: 0;
		display: flex;
		align-items: center;
		gap: 1rem;
		.line {
			height: 1.5px;
			background-color: var(--primary);
			flex: 1;
		}
	}
	p {
		margin-top: 0.25rem;
	}

	@media print {
		.item {
			font-size: 0.75rem;
			h3 {
				font-size: 0.9rem;
			}
		}
		p {
			margin-top: 0rem;
		}
	}
</style>
