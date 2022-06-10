<script lang="ts">
	import type { ComponentEvent } from '$lib/types/component-data.type';
	import { Card, CardContent, CardHeader } from '@svonic/core';
	import BlockTitle from './BlockTitle.svelte';

	export let eventList: ComponentEvent[] = [];
	export let eventType: 'dispatched' | 'forwarded';
</script>

<Card class="text-slate-900 dark:text-slate-100">
	<CardHeader>
		<BlockTitle class="capitalize" title="{eventType} Events" />
	</CardHeader>
	<CardContent>
		{#if eventList.length > 0}
			<div class="flex flex-row">
				<div class="basis-2/5 sm:basis-2/6 font-bold p-1 sm:p-2">Name</div>
				<div class="basis-3/5 sm:basis-4/6 font-bold p-1 sm:p-2">Description</div>
			</div>
			{#each eventList as prop (prop.name)}
				<div class="border-b-2 dark:border-b-neutral-900 flex flex-row last:border-b-0">
					<div class="basis-2/5 sm:basis-2/6 p-1 sm:p-2">{prop.name}</div>
					<div class="basis-3/5 sm:basis-4/6 p-1 sm:p-2">{@html prop.description}</div>
				</div>
			{/each}
		{:else}
			<div class="p-2">No {eventType} events.</div>
		{/if}
	</CardContent>
</Card>
