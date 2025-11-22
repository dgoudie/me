<script lang="ts">
	import { info } from '$lib/assets/data/info';
	import { links } from '$lib/assets/data/links';

	let showContactDetails = $state(false);
</script>

<svelte:window onbeforeprint={() => (showContactDetails = true)} />

<header class="root">
	<div class="inner">
		<div class="name">
			{info.firstName}
			{info.lastName}
		</div>
		<div class="title">
			<section></section>
			<div>{info.title}</div>
			<section></section>
		</div>
		{#if showContactDetails}
			<div class="links">
				{#each links as link, index}
					<a class="link" href={link.link} target="_blank" rel="noreferrer">
						<i class="linkIcon material-symbols-outlined">{link.icon}</i>
						<span class={{ hasLink: !!link.link }}>{link.text}</span>
					</a>
					{#if index < links.length - 1}
						<div class="linkDivider"></div>
					{/if}
				{/each}
			</div>
		{/if}
		<button
			class="gold-button contact-details-button"
			onclick={() => (showContactDetails = !showContactDetails)}
		>
			<i class="material-symbols-outlined">contact_mail</i>
			{#if showContactDetails}
				Hide Contact Details
			{:else}
				Show Contact Details
			{/if}
		</button>
	</div>
</header>

<style lang="scss">
	.root {
		--font-color: white;
		--underline-timing: cubic-bezier(0.4, 0, 0.2, 1);
		background-color: var(--primary);
		text-transform: uppercase;
		font-size: 1.5rem;
		letter-spacing: 4px;
	}

	.inner {
		margin: 0 auto;
		max-width: var(--page-width);
		padding: 1em var(--left-right-padding);
		display: grid;
		gap: 1em;
		justify-items: center;
	}

	.name {
		color: var(--font-color);
		font-weight: 600;
		font-size: 4rem;
		letter-spacing: 0.3em;
		padding: 0.25em 0;
	}

	.title {
		display: grid;
		grid-template-columns: auto min-content auto;
		align-items: center;
		gap: 5vw;
		justify-self: stretch;
		section {
			height: 2px;
			background-color: var(--accent);
		}

		div {
			color: var(--accent);
			white-space: nowrap;
		}
	}

	.contact-details-button {
		margin-top: 0.25rem;
	}

	.links {
		display: flex;
		justify-self: stretch;
		text-transform: none;
		font-size: 1.25rem;
		letter-spacing: 1px;
		padding-top: 1em;
		.link {
			flex: 1 1;
			display: grid;
			justify-items: center;
			gap: 1em;
			text-decoration: none;
			.linkIcon {
				color: var(--accent);
			}
			span {
				color: var(--font-color);
				position: relative;
				padding: 0 0 0.4em;
				&.hasLink::after {
					content: '';
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 0.1em;
					background-color: var(--accent);
					opacity: 0;
					transition:
						transform 200ms var(--underline-timing),
						opacity 200ms var(--underline-timing);
					transform: scaleX(0.5);
					transform-origin: center;
				}
			}

			&:hover,
			&:focus {
				span::after {
					transform: scaleX(1);
					opacity: 1;
				}
				outline: none;
			}
		}
		.linkDivider {
			width: 0.05em;
			margin: 0.3em 2vw;
			background-color: var(--accent);
		}
	}

	@media screen and (max-width: 800px) {
		.root {
			font-size: calc(0.25em + 2vw);
		}
		.name {
			font-size: 8vw;
		}
		.links {
			flex-direction: column;
			margin-top: 0.5em;
			font-size: calc(0.75em + 1vw);
			.link {
				grid-template-columns: min-content 1fr;
				justify-items: start;
				align-items: center;
			}
			.linkDivider {
				margin: 0.5em 0;
			}
		}
	}
	@media print {
		.inner {
			padding: 0.5em var(--left-right-padding);
			gap: 0;
		}
		.name {
			font-size: 40px;
		}
		.title {
			font-size: 16px;
		}
		.links {
			font-size: calc(14px);
			.link {
				grid-template-columns: min-content 1fr;
				justify-items: start;
				align-items: center;
			}
		}
		.contact-details-button {
			display: none;
		}
	}
</style>
