<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';
	import ToastExampleDemo from './example/ToastExampleDemo.svelte';
	import ToastWithOptionsDemo from './example/ToastWithOptionsDemo.svelte';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: ToastExampleDemo,
			description: '',
			name: 'Toast example usage'
		},
		{
			component: ToastWithOptionsDemo,
			description: '',
			name: 'Toast with Options'
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
