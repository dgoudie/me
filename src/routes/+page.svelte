<script lang="ts">
	import Education from '../components/Education.svelte';
	import Header from '../components/Header.svelte';
	import Hobbies from '../components/Hobbies.svelte';
	import Introduction from '../components/Introduction.svelte';
	import Skills from '../components/Skills.svelte';
	import WorkExperience from '../components/WorkExperience.svelte';
</script>

<div class="root">
	<Header />
	<Introduction />
	<div class="grid">
		<div class="gridInner">
			<div class="gridLeft">
				<h2 class="sectionHeader">education</h2>
				<Education />
				<h2 class="sectionHeader">work experience</h2>
				<WorkExperience />
			</div>
			<div class="gridRight">
				<h2 class="sectionHeader">skills & expertise</h2>
				<Skills />
				<h2 class="sectionHeader">hobbies</h2>
				<Hobbies />
			</div>
			<div class="source">
				Website build using <a href="https://svelte.dev/" target="_blank">Svelte</a>. View the
				source
				<a href="https://github.com/dgoudie/me" target="_blank">here</a>.
			</div>
			<div class="website">
				This résumé was exported from my website <a href="https://daniel.goudie.dev"
					>https://daniel.goudie.dev</a
				>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.root {
		--column-padding: calc(0.83em + 1vw);
	}
	.grid {
		margin: 0 auto;
		max-width: var(--page-width);
		padding: 0 var(--left-right-padding);
		color: var(--primary);
	}
	.gridInner {
		border-top: 2px solid var(--primary);
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	.gridLeft {
		border-right: 2px solid var(--primary);
		padding-right: var(--column-padding);
	}
	.gridRight {
		padding-left: var(--column-padding);
	}
	.gridLeft,
	.gridRight {
		> *:not(.sectionHeader) {
			margin: 2em 0 5em;
		}
	}
	.sectionHeader {
		text-transform: uppercase;
		letter-spacing: 2px;
		text-align: center;
		position: relative;
		background: var(--primary);
		color: var(--accent);
	}
	.source,
	.website {
		color: #777777;
		font-size: 0.6rem;
		margin: 0.75rem 0;
	}
	.website {
		display: none;
	}

	@media screen and (max-width: 800px) {
		.gridInner {
			grid-template-columns: 1fr;
		}
		.gridLeft {
			border-right: none;
			padding-right: var(--column-padding);
		}
		.gridRight {
			.sectionHeader {
				padding-top: 0.5em;
				border-top: 2px solid var(--primary);
			}
		}

		.gridLeft,
		.gridRight {
			padding-right: 0;
			padding-left: 0;
		}
	}
	@media print {
		.sectionHeader {
			font-size: 1em;
			margin-bottom: 0.5rem;
		}
		.website {
			display: block;
		}
		.source {
			display: none;
		}
	}
</style>
