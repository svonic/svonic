<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import ActionSheetEventsDemo from '$lib/demo/action-sheet/example/ActionSheetEventsDemo.svelte';
	import ActionSheetBackDropDismissDemo from '$lib/demo/action-sheet/prop/ActionSheetBackDropDismissDemo.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: ActionSheetEventsDemo,
			description: 'Action Sheet subscribing to events and using Icons with Buttons.',
			name: 'Action Sheet Events'
		}
	];

	const propDemoList = [
		{
			name: 'backdropDismiss',
			component: ActionSheetBackDropDismissDemo
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
