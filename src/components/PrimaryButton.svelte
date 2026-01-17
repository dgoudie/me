<script lang="ts">
	import { type Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		children: Snippet;
		leadingIcon?: boolean;
		icon: string;
	}
	let { children, leadingIcon = false, icon, ...props }: Props = $props();
</script>

<button type="button" class="link-button" {...props}>
	{#if leadingIcon}
		<span class="material-symbols-outlined">{icon}</span>
	{/if}
	<span class="content">
		{@render children()}
	</span>
	{#if !leadingIcon}
		<span class="material-symbols-outlined">{icon}</span>
	{/if}
</button>

<style lang="scss">
	button {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		padding: 0.3rem 0.75rem;
		font-family: inherit;
		text-transform: uppercase;
		font-weight: 600;
		background: var(--accent);
		color: var(--primary);
		border: none;
		cursor: pointer;
	}
</style>
