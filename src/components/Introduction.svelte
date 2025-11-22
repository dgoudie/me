<script>
	import { info } from '$lib/assets/data/info';
</script>

<div class="root">
	<img class="image" src={info.imageUrl} alt={`${info.firstName} ${info.lastName}`} />
	<div class="text">
		{#each info.about as text}
			<p>{text}</p>
		{/each}
	</div>
</div>

<style lang="scss">
	.root {
		margin: 0 auto;
		max-width: var(--page-width);
		display: grid;
		grid-template-columns: 200px auto;
		gap: 2rem;
		align-items: center;
		padding: 2em var(--left-right-padding);
	}

	.image {
		border-radius: 10000px;
		overflow: hidden;
		position: relative;
		height: 200px;
	}

	.text {
		font-size: 1.2rem;
	}

	@media screen and (max-width: 800px) {
		.text {
			font-size: calc(0.25em + 2vw);
		}
	}

	@media screen and (max-width: 640px) {
		.root {
			grid-template-columns: auto;
			justify-items: center;
		}

		.image {
			height: 240px;
			width: 240px;
		}
		.text {
			font-size: 1.2rem;
		}
	}
	@media print {
		.root {
			grid-template-columns: 100px auto;
			padding: 0 var(--left-right-padding);
		}
		.image {
			height: 100px;
			width: 100px;
		}
		.text {
			font-size: 14px;
		}
	}
</style>
