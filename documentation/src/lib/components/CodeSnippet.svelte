<script lang="ts">
	import { Card } from '@svonic/core';
	import { HighlightSvelte } from 'svelte-highlight';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	export let code = '';
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Card class="direction-ltr mx-0">
	<HighlightSvelte code="{code.substring(1)}" />
</Card>

<style>
</style>
