<script lang="ts">
	import moment from 'moment';
	import type { Snippet } from 'svelte';
	import WorkExperienceMoreDialog from './WorkExperienceMoreDialog.svelte';

	interface Props {
		jobTitle: string;
		iconUrl: string;
		company: string;
		startDate: string;
		endDate?: string;
		description: Snippet;
		moreInfo?: Snippet;
	}
	const props: Props = $props();
</script>

<div class="item">
	<div class="jobTitle">{props.jobTitle}</div>
	<div class="locationAndDate">
		<img class="image" src={props.iconUrl} alt={props.company} />
		<span>{props.company}</span>
		<span class="divider">/</span>
		<span>
			{moment(props.startDate).format('MMMM YYYY')} -{' '}
			{!!props.endDate ? moment(props.endDate).format('MMMM YYYY') : 'Present'}
		</span>
	</div>
	<p class="description">{@render props.description()}</p>
	{#if props.moreInfo}
		<div class="more">
			<WorkExperienceMoreDialog>{@render props.moreInfo()}</WorkExperienceMoreDialog>
		</div>
	{/if}
</div>

<style lang="scss">
	.item {
		display: grid;
		gap: 0.5rem;
		margin-top: 1.5rem;
	}

	.jobTitle {
		font-weight: bold;
	}

	.locationAndDate {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: max-content;
		align-items: center;
		gap: 0 0.5rem;
		font-style: italic;
		.image {
			display: flex;
			align-items: center;
			width: 24px;
			height: 24px;
		}
	}

	.description {
		margin: 0;
		text-align: justify;
	}

	.more {
		justify-self: flex-end;
	}

	@media screen and (max-width: 800px) {
		.locationAndDate {
			grid-template-rows: auto auto;
			.image {
				grid-row-start: span 2;
			}
		}
		.divider {
			display: none;
		}
	}
	@media print {
		.item {
			margin-top: 0.75rem;
		}
		.jobTitle {
			font-size: 0.8rem;
			margin: 0;
		}

		.locationAndDate {
			font-size: 0.75rem;
			.image {
				width: 20px;
				height: 20px;
			}
		}

		.description {
			font-size: 0.75rem;
		}

		.more {
			display: none;
		}
	}
</style>
