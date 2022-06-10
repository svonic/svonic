<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import RadioGroupListItemDemo from './example/RadioGroupListItemDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: RadioGroupListItemDemo,
			description: 'Radio Group with a list of Radio components.',
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
