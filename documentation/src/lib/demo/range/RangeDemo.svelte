<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import RangeIconsDemo from './example/RangeIconsDemo.svelte';
	import RangeColorDemo from './prop/RangeColorDemo.svelte';
	import RangeDualKnobsDemo from './prop/RangeDualKnobsDemo.svelte';
	import RangePinDemo from './prop/RangePinDemo.svelte';
	import RangeSnapsDemo from './prop/RangeSnapsDemo.svelte';
	import RangeStepDemo from './prop/RangeStepDemo.svelte';
	import RangeTicksDemo from './prop/RangeTicksDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: RangeIconsDemo,
			description: 'Various Items inside a list with Badges.',
			name: 'List Items with Badges'
		}
	];

	const propDemoList = [
		{ name: 'color', component: RangeColorDemo },
		{ name: 'dualKnobs', component: RangeDualKnobsDemo },
		{ name: 'pin', component: RangePinDemo },
		{ name: 'snaps', component: RangeSnapsDemo },
		{ name: 'step', component: RangeStepDemo },
		{ name: 'ticks', component: RangeTicksDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
