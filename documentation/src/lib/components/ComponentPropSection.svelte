<script lang="ts">
	import type { ComponentProp } from '$lib/types/component-data.type';
	import { Card, CardContent, CardHeader } from '@svonic/core';
	import BlockTitle from './BlockTitle.svelte';

	export let propList: ComponentProp[] = [];
	export let title = '';
</script>

<Card class="text-slate-900 dark:text-slate-100">
	<CardHeader>
		<BlockTitle title="{title}" />
	</CardHeader>
	<CardContent>
		<div class="flex flex-row">
			<div class="basis-1/5 sm:basis-1/6 font-bold p-1 sm:p-2">Name</div>
			<div class="basis-1/5 sm:basis-1/6 font-bold p-1 sm:p-2">Type</div>
			<div class="basis-1/5 sm:basis-1/6 font-bold p-1 sm:p-2 whitespace-nowrap">Default Value</div>
			<div class="basis-2/5 sm:basis-3/6 font-bold p-1 sm:p-2">Description</div>
		</div>
		{#each propList as prop (prop.name)}
			<div class="border-b-2 dark:border-b-neutral-900 flex flex-row last:border-b-0">
				<div class="basis-1/5 sm:basis-1/6 p-1 sm:p-2">{prop.name}</div>
				<div class="basis-1/5 sm:basis-1/6 p-1 sm:p-2">
					{#each prop.valueList as propValue (propValue.value)}
						<p>{propValue.value}</p>
					{/each}
				</div>
				<div class="basis-1/5 sm:basis-1/6 p-1 sm:p-2">{prop.defaultValue}</div>
				<div class="basis-2/5 sm:basis-3/6 p-1 sm:p-2">{@html prop.description}</div>
			</div>
		{/each}
	</CardContent>
</Card>

<style>
</style>
