<script lang="ts">
	import type { ComponentMethod } from '$lib/types/component-data.type';
	import { Card, CardContent, CardHeader } from '@svonic/core';
	import BlockTitle from './BlockTitle.svelte';

	export let methodList: ComponentMethod[] = [];
</script>

<Card class="text-slate-900 dark:text-slate-100">
	<CardHeader>
		<BlockTitle title="Methods" />
	</CardHeader>
	<CardContent>
		{#if methodList.length > 0}
			<div class="flex flex-row">
				<div class="basis-1/5 sm:basis-2/6 font-bold p-1 sm:p-2">Name</div>
				<div class="basis-2/5 sm:basis-2/6 font-bold p-1 sm:p-2">Signature</div>
				<div class="basis-2/5 sm:basis-2/6 font-bold p-1 sm:p-2">Description</div>
			</div>
			{#each methodList as prop (prop)}
				<div class="border-b-2 dark:border-b-neutral-900 flex flex-row last:border-b-0">
					<div class="basis-1/5 sm:basis-2/6 p-1 sm:p-2">{prop.name}</div>
					<div class="basis-2/5 sm:basis-2/6 p-1 sm:p-2">{prop.signature}</div>
					<div class="basis-2/5 sm:basis-3/6 p-1 sm:p-2">{@html prop.description}</div>
				</div>
			{/each}
		{:else}
			<div class="p-2">No methods.</div>
		{/if}
	</CardContent>
</Card>
