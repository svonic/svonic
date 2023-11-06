<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import ToolbarButtonGroupDemo from './example/ToolbarButtonsDemo.svelte';
	import ToolbarMenuButtonDemo from './example/ToolbarMenuButtonDemo.svelte';
	import ToolbarProgressBarDemo from './example/ToolbarProgressBarDemo.svelte';
	import ToolbarSearchbarDemo from './example/ToolbarSearchbarDemo.svelte';
	import ToolbarSegmentDemo from './example/ToolbarSegmentDemo.svelte';
	import ToolbarTitleOnlyDemo from './example/ToolbarTitleOnlyDemo.svelte';
	import ToolbarColorDemo from './prop/ToolbarColorDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: ToolbarTitleOnlyDemo,
			description: '',
			name: 'Toolbar with Title Only'
		},
		{
			component: ToolbarButtonGroupDemo,
			description: '',
			name: 'Toolbar with ButtonGroups examples'
		},
		{
			component: ToolbarMenuButtonDemo,
			description: '',
			name: 'Toolbar with MenuButton examples'
		},
		{
			component: ToolbarSearchbarDemo,
			description: '',
			name: 'Toolbar with Searchbar'
		},
		{
			component: ToolbarSegmentDemo,
			description: '',
			name: 'Toolbar with Segment'
		},
		{
			component: ToolbarProgressBarDemo,
			description: '',
			name: 'Toolbar with ProgressBar'
		}
	];

	const propDemoList = [{ name: 'color', component: ToolbarColorDemo }];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
