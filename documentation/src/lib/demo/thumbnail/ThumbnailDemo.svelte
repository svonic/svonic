<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import ThumbnailDefaultDemo from '$lib/demo/thumbnail/example/ThumbnailDefaultDemo.svelte';
	import ThumbnailListItemDemo from '$lib/demo/thumbnail/example/ThumbnailListItemDemo.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: ThumbnailDefaultDemo,
			description: 'The default Thumbnail component.',
			name: 'Default Thumbnail'
		},
		{
			component: ThumbnailListItemDemo,
			description: 'Various Thumbnails inside a list.',
			name: 'Item Thumbnails'
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
