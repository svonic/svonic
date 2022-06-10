<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import SegmentButtonCheckedDisabledDemo from './example/SegmentButtonCheckedDisabledDemo.svelte';
	import SegmentButtonIconDemo from './example/SegmentButtonIconDemo.svelte';
	import SegmentButtonLabelOnlyDemo from './example/SegmentButtonLabelOnlyDemo.svelte';
	import SegmentButtonValueIconDemo from './example/SegmentButtonValueIconDemo.svelte';
	import SegmentButtonValueLastButtonDemo from './example/SegmentButtonValueLastButtonDemo.svelte';
	import SegmentButtonWithTextDemo from './example/SegmentButtonWithTextDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: SegmentButtonWithTextDemo,
			description: '',
			name: 'Segment buttons with text'
		},
		{
			component: SegmentButtonCheckedDisabledDemo,
			description: '',
			name: 'Segment buttons with the first checked and the last disabled'
		},
		{
			component: SegmentButtonValueIconDemo,
			description: '',
			name: 'Segment buttons with values and icons'
		},
		{
			component: SegmentButtonValueLastButtonDemo,
			description: '',
			name: 'Segment with a value that checks the last button'
		},
		{
			component: SegmentButtonLabelOnlyDemo,
			description: '',
			name: 'Label only'
		},
		{
			component: SegmentButtonIconDemo,
			description: '',
			name: 'Segment buttons with icons in various positions'
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
