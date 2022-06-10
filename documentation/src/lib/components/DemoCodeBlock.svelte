<script lang="ts">
	import { Card, CardContent, CardHeader, type ModeType } from '@svonic/core';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import BlockTitle from './BlockTitle.svelte';
	import CodeSnippet from './CodeSnippet.svelte';

	export let demoComponent;
	export let description: string;
	export let title: string;

	let code: string;
	let mode: Writable<ModeType> = getContext('mode');
</script>

<Card class="text-slate-900 dark:text-slate-100">
	<CardHeader>
		<BlockTitle title="{title}" />
	</CardHeader>
	<CardContent class="flex flex-col gap-4">
		<p>{@html description}</p>
		<div class="text-center">
			{#if $mode === 'ios'}
				<svelte:component this="{demoComponent}" mode="{$mode}" bind:codeSnippet="{code}" />
			{:else}
				<svelte:component this="{demoComponent}" mode="{$mode}" bind:codeSnippet="{code}" />
			{/if}
		</div>
		{#if code}
			<CodeSnippet code="{code}" />
		{/if}
	</CardContent>
</Card>

<style>
</style>
