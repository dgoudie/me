<script lang="ts">
	import type { Snippet } from 'svelte';
	import LinkButton from './LinkButton.svelte';
	import PrimaryButton from './PrimaryButton.svelte';

	type Props = {
		children: Snippet;
	};
	let { children }: Props = $props();
	let dialog: HTMLDialogElement;
</script>

<LinkButton icon="keyboard_arrow_right" onclick={() => dialog.showModal()}>More Info</LinkButton>

<dialog bind:this={dialog}>
	<div class="content">{@render children()}</div>
	<div class="close">
		<PrimaryButton leadingIcon icon="close" onclick={() => dialog.close()}>Close</PrimaryButton>
	</div>
</dialog>

<style lang="scss">
	dialog {
		--animation: cubic-bezier(0.16, 0.55, 0.19, 1.01);
		border: none;
		background-color: var(--background);
		min-width: min(600px, calc(100vw - 5rem));
		max-width: min(900px, calc(100vw - 5rem));
		align-items: stretch;
		&::backdrop {
			background-color: #00000077;
			animation: fadeIn 0.3s var(--animation);
		}
		&[open] {
			animation: fadeIn 0.3s var(--animation);
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}

	.close {
		align-self: flex-end;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
