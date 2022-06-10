<script lang="ts">
	import { getContext } from 'svelte';
	import { key } from './context-tab';

	export let index: number;

	const { tabIndex } = getContext(key);
</script>

<div class="flex-grow overscroll-y-contain" hidden="{$tabIndex !== index}">
	<slot />
</div>

<style>
</style>
