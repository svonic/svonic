<script lang="ts">
	import type { ComponentProp } from '$lib/types/component-data.type';
	import { Card, CardContent, CardHeader } from '@svonic/core';
	import BlockTitle from './BlockTitle.svelte';
	import ComponentPropSection from './ComponentPropSection.svelte';

	export let propList: ComponentProp[] = [];

	let normalPropList: ComponentProp[] = [];
	let specialPropList: ComponentProp[] = [];

	const setNormalPropList = (list: ComponentProp[]): void => {
		const updatedList = list.filter((prop) => !prop.isSpecial);

		normalPropList = [...updatedList];
	};

	const setSpecialPropList = (list: ComponentProp[]): void => {
		const updatedList = list.filter((prop) => prop.isSpecial);

		specialPropList = [...updatedList];
	};

	$: {
		setNormalPropList(propList);
		setSpecialPropList(propList);
	}
</script>

{#if propList.length > 0}
	{#if normalPropList.length > 0}
		<ComponentPropSection propList="{normalPropList}" title="Properties" />
	{/if}

	{#if specialPropList.length > 0}
		<ComponentPropSection propList="{specialPropList}" title="Special Properties" />
	{/if}
{:else}
	<Card class="text-slate-900 dark:text-slate-100">
		<CardHeader>
			<BlockTitle title="Properties" />
		</CardHeader>
		<CardContent>
			<div class="p-2">No props.</div>
		</CardContent>
	</Card>
{/if}

<style>
</style>
