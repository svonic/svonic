<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import ProgressSpinnerColorDemo from './prop/ProgressSpinnerColorDemo.svelte';
	import ProgressSpinnerNameDemo from './prop/ProgressSpinnerNameDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [];

	const propDemoList = [
		{ name: 'color', component: ProgressSpinnerColorDemo },
		{ name: 'name', component: ProgressSpinnerNameDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
