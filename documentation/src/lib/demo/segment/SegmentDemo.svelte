<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import SegmentDefaultDemo from './example/SegmentDefaultDemo.svelte';
	import SegmentIconOnlyDemo from './example/SegmentIconDemo.svelte';
	import SegmentToolbarDemo from './example/SegmentToolbarDemo.svelte';
	import SegmentColorDemo from './prop/SegmentColorDemo.svelte';
	import SegmentDisabledDemo from './prop/SegmentDisabledDemo.svelte';
	import SegmentScrollableDemo from './prop/SegmentScrollableDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: SegmentDefaultDemo,
			description: '',
			name: 'Default Segment'
		},
		{
			component: SegmentIconOnlyDemo,
			description: '',
			name: 'Icon only'
		},
		{
			component: SegmentToolbarDemo,
			description: '',
			name: 'Segment in a toolbar'
		}
	];

	const propDemoList = [
		{ name: 'color', component: SegmentColorDemo },
		{ name: 'disabled', component: SegmentDisabledDemo },
		{
			component: SegmentScrollableDemo,
			name: 'scrollable'
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
