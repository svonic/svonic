<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import BadgeListItemDemo from '$lib/demo/badge/example/BadgeListItemDemo.svelte';
	import BadgeColorDemo from '$lib/demo/badge/prop/BadgeColorDemo.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: BadgeListItemDemo,
			description: 'Various Items inside a list with Badges.',
			name: 'List Items with Badges'
		}
	];

	const propDemoList = [
		{
			name: 'color',
			component: BadgeColorDemo
		}
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
