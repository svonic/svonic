<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import RangeSliderIconsDemo from './example/RangeSliderIconsDemo.svelte';
	import RangeSliderColorDemo from './prop/RangeSliderColorDemo.svelte';
	import RangeSliderDualKnobsDemo from './prop/RangeSliderDualKnobsDemo.svelte';
	import RangeSliderPinDemo from './prop/RangeSliderPinDemo.svelte';
	import RangeSliderSnapsDemo from './prop/RangeSliderSnapsDemo.svelte';
	import RangeSliderStepDemo from './prop/RangeSliderStepDemo.svelte';
	import RangeSliderTicksDemo from './prop/RangeSliderTicksDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: RangeSliderIconsDemo,
			description: 'Various Items inside a list with Badges.',
			name: 'List Items with Badges'
		}
	];

	const propDemoList = [
		{ name: 'color', component: RangeSliderColorDemo },
		{ name: 'dualKnobs', component: RangeSliderDualKnobsDemo },
		{ name: 'pin', component: RangeSliderPinDemo },
		{ name: 'snaps', component: RangeSliderSnapsDemo },
		{ name: 'step', component: RangeSliderStepDemo },
		{ name: 'ticks', component: RangeSliderTicksDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
