<script lang="ts">
	import type { ComponentProp } from '$lib/types/component-data.type';
	import DemoCodeBlock from './DemoCodeBlock.svelte';

	export let exampleDemoList = [];
	export let propList: ComponentProp[] = [];
	export let propDemoList = [];

	let demoPropList: ComponentProp[] = [];

	const getPropDemoComponent = (propName: string) => {
		if (propName) {
			const element = propDemoList.find((prop) => prop.name === propName);

			return element?.component;
		}

		return null;
	};

	const setComponentPropDemoData = (propList: ComponentProp[]) => {
		if (propList.length > 0) {
			demoPropList = propList.filter((prop) => prop.hasDemo);
		}
	};

	$: setComponentPropDemoData(propList);
</script>

{#if propList.length > 0}
	<div class="flex flex-col gap-2">
		{#each demoPropList as prop (prop.name)}
			<DemoCodeBlock
				demoComponent="{getPropDemoComponent(prop.name)}"
				description="{prop.description}"
				title="{prop.name}"
			/>
		{/each}
		{#each exampleDemoList as demo}
			<DemoCodeBlock
				demoComponent="{demo.component}"
				description="{demo.description}"
				title="{demo.name}"
			/>
		{/each}
	</div>
{/if}

<style>
</style>
