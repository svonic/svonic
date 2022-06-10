<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import ProgressSkeletonListItemDemo from './example/ProgressSkeletonListItemDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: ProgressSkeletonListItemDemo,
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
