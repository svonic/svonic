<script lang="ts">
	import { getIonicMenu, Icon, Item, Label, List } from '@svonic/core';

	interface NavListItem {
		icon: string;
		iconTitle: string;
		label: string;
		route: string;
	}

	export let navList: NavListItem[] = [];

	const closeAndNavigate = (url: string) => {
		console.log('Navigate url', url);
		getIonicMenu('main-menu')
			.close(true)
			.then(() => {
				console.log('menu closed');
			});
	};
</script>

<List lines="full">
	<slot name="start" />
	{#each navList as item}
		<Item
			href="{item.route}"
			on:click="{() => {
				closeAndNavigate(item.route);
			}}"
		>
			<Icon color="medium" path="{item.icon}" size="large" toSlot="start" />
			<Label>{item.label}</Label>
		</Item>
	{/each}
	<slot name="end" />
</List>
