<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import FooterToolbarDemo from './example/FooterToolbarDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: FooterToolbarDemo,
			description: '',
			name: 'Footer with Toolbar'
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
