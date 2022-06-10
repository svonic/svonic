<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import ChipAvatarDemo from '$lib/demo/chip/example/ChipAvatarDemo.svelte';
	import ChipIconDemo from '$lib/demo/chip/example/ChipIconDemo.svelte';
	import ChipColorDemo from '$lib/demo/chip/prop/ChipColorDemo.svelte';
	import ChipDisabledDemo from '$lib/demo/chip/prop/ChipDisabledDemo.svelte';
	import ChipOutlineDemo from '$lib/demo/chip/prop/ChipOutlineDemo.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: ChipAvatarDemo,
			description: 'An example of Chips used with an Avatar.',
			name: 'Chips with Avatar'
		},
		{
			component: ChipIconDemo,
			description: 'Various examples of Chips used with Icons.',
			name: 'Chips with Icons'
		}
	];

	const propDemoList = [
		{ name: 'color', component: ChipColorDemo },
		{ name: 'disabled', component: ChipDisabledDemo },
		{ name: 'outline', component: ChipOutlineDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
