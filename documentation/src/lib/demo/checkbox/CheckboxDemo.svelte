<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import CheckboxListItemDemo from '$lib/demo/checkbox/example/CheckboxListItemDemo.svelte';
	import CheckboxCheckedDemo from '$lib/demo/checkbox/prop/CheckboxCheckedDemo.svelte';
	import CheckboxColorDemo from '$lib/demo/checkbox/prop/CheckboxColorDemo.svelte';
	import CheckboxDisabledDemo from '$lib/demo/checkbox/prop/CheckboxDisabledDemo.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: CheckboxListItemDemo,
			description: 'Various Items inside a list with Checkboxes.',
			name: 'Checkboxes in a List'
		}
	];

	const propDemoList = [
		{ name: 'checked', component: CheckboxCheckedDemo },
		{ name: 'color', component: CheckboxColorDemo },
		{ name: 'disabled', component: CheckboxDisabledDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
