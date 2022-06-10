<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import ProgressBarBufferDemo from './prop/ProgressBarBufferDemo.svelte';
	import ProgressBarColorDemo from './prop/ProgressBarColorDemo.svelte';
	import ProgressBarReversedDemo from './prop/ProgressBarReversedDemo.svelte';
	import ProgressBarTypeDemo from './prop/ProgressBarTypeDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [];

	const propDemoList = [
		{ name: 'buffer', component: ProgressBarBufferDemo },
		{ name: 'color', component: ProgressBarColorDemo },
		{ name: 'reversed', component: ProgressBarReversedDemo },
		{ name: 'type', component: ProgressBarTypeDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
