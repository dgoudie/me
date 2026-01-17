<script>
	import WorkExperienceItem from './WorkExperienceItem.svelte';
</script>

<div class="list">
	<WorkExperienceItem
		iconUrl="/up.svg"
		company="Union Pacific Railroad"
		jobTitle="Associate Systems Engineer, Platforms Engineering"
		startDate="2022-05-01T06:00:00.000Z"
	>
		{#snippet description()}
			I am currently working on and am one of the lead front- and back-end engineers for Union
			Pacific's internally developed <b>state-of-the-art observability platform</b>. Additionally, I
			am a member of UP's <b>enterprise API approval board</b>. Our goal is to ensure consistency
			among our API suite, enforce enterprise standards, and provide feedback for APIs being
			developed throughout the company.
		{/snippet}
	</WorkExperienceItem>

	<WorkExperienceItem
		iconUrl="/up.svg"
		company="Union Pacific Railroad"
		jobTitle="Senior Project Engineer, Corporate Technology"
		startDate="2020-04-01T05:00:00.000Z"
		endDate="2022-05-01T06:00:00.000Z"
	>
		{#snippet description()}
			At my previous position on the Corporate Technology developer team, I was the lead technical
			designer for the company's all-encompassing real estate management software - I was
			responsible for selecting the tech stack for the application and was the lead UI developer. I
			also assisted in debugging and designing of other real estate and financial applications.
		{/snippet}
	</WorkExperienceItem>

	<WorkExperienceItem
		iconUrl="/up.svg"
		company="Union Pacific Railroad"
		jobTitle="Application Developer"
		startDate="2018-05-07T05:00:00.000Z"
		endDate="2020-04-01T05:00:00.000Z"
	>
		{#snippet description()}
			As an application developer, I worked across multiple teams contributing to the development
			and implementation of various internal systems, including a file-sharing and document store
			for the Collaboration team, and an infrastructure provisioning system for the Systems
			Engineering group.
		{/snippet}
	</WorkExperienceItem>
</div>

<style lang="scss">
	.list {
		margin: 0;
		padding: 0;
	}
	// h4 {
	// 	margin-bottom: 0;
	// }
	// p {
	// 	margin-block: 0.75rem;
	// }
</style>
