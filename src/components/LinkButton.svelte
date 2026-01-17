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
		color: var(--link-color);
		appearance: none;
		border: none;
		background-color: transparent;
		font-family: inherit;
		display: inline-flex;
		align-items: center;
		line-height: 1;
		gap: 0.25ch;
		cursor: pointer;
		.content {
			text-underline-offset: 3px;
		}
		&:hover .content {
			text-decoration: underline;
		}
	}
	.material-symbols-outlined {
		font-size: 120%;
	}
</style>
