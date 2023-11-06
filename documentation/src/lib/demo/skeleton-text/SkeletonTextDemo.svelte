<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import SkeletonTextListItemDemo from './example/SkeletonTextListItemDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: SkeletonTextListItemDemo,
			description: 'Various Items inside a list with Badges.',
			name: 'List Items with Badges'
		}
	];

	const propDemoList = [];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
