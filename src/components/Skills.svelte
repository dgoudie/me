<script>
	import { skills } from '$lib/assets/data/skills';
</script>

<div class="list">
	{#each skills as skill}
		<div class="item">{skill}</div>
	{/each}
	<div class="more">and many more...</div>
</div>

<style lang="scss">
	.list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.item {
		background: #f5f5f1;
		border-radius: 8px;
		padding: 3px 7px;
	}
	.more {
		padding: 3px 7px;
	}
	@media print {
		.item,
		.more {
			font-size: 0.8rem;
			padding: 2px 5px;
		}
	}
</style>
