<script lang="ts">
	import type { CssClassType } from '@svonic/core';
	import { Icon, Item, Label } from '@svonic/core';
	import { createEventDispatcher } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let iconEnd: string | undefined = undefined;
	export let iconStart: string | undefined = undefined;
	export let id: string = '';
	export let label: string | undefined = undefined;

	const dispatch = createEventDispatcher();

	function onClick() {
        dispatch('click');
    }
</script>

<Item
	button="{true}"
	class="{cssClass}"
	id="{id}"
	on:click="{onClick}"
>
	{#if iconStart}
		<Icon
			class="mr-1"
			path="{iconStart}"
			size="large"
			slot="start"
		/>
	{/if}
	<Label>{label}</Label>
	{#if iconEnd}
		<Icon
			class="ml-1"
			path="{iconEnd}"
			size="large"
			slot="end"
		/>
	{/if}
</Item>

<style global>
	.svo-command-bar-button {
		margin-inline-start: 0 !important;
		height: 48px !important;
	}
</style>
