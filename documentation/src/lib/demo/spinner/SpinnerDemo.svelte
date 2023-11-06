<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import SpinnerColorDemo from './prop/SpinnerColorDemo.svelte';
	import SpinnerNameDemo from './prop/SpinnerNameDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [];

	const propDemoList = [
		{ name: 'color', component: SpinnerColorDemo },
		{ name: 'name', component: SpinnerNameDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
