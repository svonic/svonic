<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import ButtonIconDemo from '$lib/demo/button/example/ButtonIconDemo.svelte';
	import ButtonColorDemo from '$lib/demo/button/prop/ButtonColorDemo.svelte';
	import ButtonDisabledDemo from '$lib/demo/button/prop/ButtonDisabledDemo.svelte';
	import ButtonExpandDemo from '$lib/demo/button/prop/ButtonExpandDemo.svelte';
	import ButtonFillDemo from '$lib/demo/button/prop/ButtonFillDemo.svelte';
	import ButtonShapeDemo from '$lib/demo/button/prop/ButtonShapeDemo.svelte';
	import ButtonSizeDemo from '$lib/demo/button/prop/ButtonSizeDemo.svelte';
	import ButtonStrongDemo from '$lib/demo/button/prop/ButtonStrongDemo.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: ButtonIconDemo,
			description: 'Various Button with Icons Demo.',
			name: 'Button with Icons'
		}
	];

	const propDemoList = [
		{ name: 'color', component: ButtonColorDemo },
		{ name: 'disabled', component: ButtonDisabledDemo },
		{ name: 'expand', component: ButtonExpandDemo },
		{ name: 'fill', component: ButtonFillDemo },
		{ name: 'shape', component: ButtonShapeDemo },
		{ name: 'size', component: ButtonSizeDemo },
		{ name: 'strong', component: ButtonStrongDemo }
	];
</script>

<DocPageContent componentData="{componentData}">
	<DemoCodeSection
		exampleDemoList="{exampleDemoList}"
		propList="{componentData.propList}"
		propDemoList="{propDemoList}"
	/>
</DocPageContent>
