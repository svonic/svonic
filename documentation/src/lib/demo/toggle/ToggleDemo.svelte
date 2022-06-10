<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import ToggleListItemDemo from './example/ToggleListItemDemo.svelte';
	import ToggleColorDemo from './prop/ToggleColorDemo.svelte';
	import ToggleDisabledDemo from './prop/ToggleDisabledDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: ToggleListItemDemo,
			description: 'Various Toggles inside a list with Badges.',
			name: 'Toggles in a List'
		}
	];

	const propDemoList = [
		{ name: 'color', component: ToggleColorDemo },
		{ name: 'disabled', component: ToggleDisabledDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
