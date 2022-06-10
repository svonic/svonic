<script lang="ts">
	import DemoCodeSection from '$lib/components/DemoCodeSection.svelte';
	import DocPageContent from '$lib/components/DocPageContent.svelte';
	import AvatarDefaultDemo from '$lib/demo/avatar/example/AvatarDefaultDemo.svelte';
	import AvatarChipDemo from '$lib/demo/avatar/example/AvatarChipDemo.svelte';
	import AvatarListItemDemo from '$lib/demo/avatar/example/AvatarListItemDemo.svelte';
	import type { ComponentData } from '$lib/types/component-data.type';

	export let componentData: ComponentData;

	const exampleDemoList = [
		{
			component: AvatarDefaultDemo,
			description: 'The default Avatar component.',
			name: 'Default Avatar'
		},
		{
			component: AvatarChipDemo,
			description: 'Avatar inside a Chip.',
			name: 'Chip Avatar'
		},
		{
			component: AvatarListItemDemo,
			description: 'Various Avatars inside a list.',
			name: 'Item Avatars'
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
