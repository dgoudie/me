<script>
	import { workExperience } from '$lib/assets/data/work-experience';
	import moment from 'moment';
</script>

<div class="list">
	{#each workExperience as wei, i}
		<div class="item">
			<div class="jobTitle">{wei.jobTitle}</div>
			<div class="locationAndDate">
				<img class="image" src={wei.iconUrl} alt={wei.company} />
				<span>{wei.company}</span>
				<span class="divider">/</span>
				<span>
					{moment(wei.startDate).format('MMMM YYYY')} -{' '}
					{!!wei.endDate ? moment(wei.endDate).format('MMMM YYYY') : 'Present'}
				</span>
			</div>
			<p class="description">{wei.description}</p>
		</div>
	{/each}
</div>

<style lang="scss">
	.list {
		margin: 0;
		padding: 0;
	}
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
	}
</style>
