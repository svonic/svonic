<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import TitleColorDemo from './prop/TitleColorDemo.svelte';
	import TitleSizeDemo from './prop/TitleSizeDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [];

	const propDemoList = [
		{ name: 'color', component: TitleColorDemo },
		{ name: 'size', component: TitleSizeDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
