<script>
	import { education } from '$lib/assets/data/education';
</script>

<div class="list">
	{#each education as educationItem, i}
		<div class="item">
			<img class="image" src={educationItem.iconUrl} alt={educationItem.title} />
			<div>
				<div class="title">{educationItem.title}</div>
				{#each educationItem.secondaryInfo as text, i}
					<div class="secondary">
						{text}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.item {
		display: flex;
		gap: 1rem;
		align-items: center;
		justify-content: center;

		.title {
			margin: 0;
			font-size: 1rem;
			font-weight: bold;
		}
		.secondary {
			margin: 0;
			font-weight: normal;
			font-style: italic;
			font-size: 0.9rem;
		}
	}

	.image {
		position: relative;
		justify-self: center;
		object-fit: contain;
		width: 64px;
		height: 64px;
	}

	@media print {
		.item {
			.title {
				font-size: 0.8rem;
			}
			.secondary {
				font-size: 0.75rem;
			}
		}
		.image {
			position: relative;
			justify-self: center;
			object-fit: contain;
			width: 32px;
			height: 32px;
		}
	}
</style>
