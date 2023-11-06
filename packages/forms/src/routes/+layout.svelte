<script lang="ts">
	import { mdiHomeAnalytics, mdiRobotHappyOutline } from '@mdi/js';
	import { Content, Item, Menu, MenuButton } from '@svonic/core';
	import { AppNavigation, AppShell } from '@svonic/ui';
	import '../app.postcss';

	const navList = [
		{ icon: mdiHomeAnalytics, iconTitle: 'Home Analytics', label: 'Index', route: '/' },
		{
			icon: mdiRobotHappyOutline,
			iconTitle: 'Robot Happy Outline',
			label: 'Form',
			route: '/svonic/form'
		}
	];
</script>

<AppShell headerColor="light">
	<svelte:fragment slot="app-toolbar-title">App Title</svelte:fragment>
	<svelte:fragment slot="menu-end">
		<Menu
			contentId="main"
			menuId="main-menu"
			side="end"
			type="overlay"
		>
			<Content>
				<AppNavigation navList="{navList}">
					<svelte:fragment slot="end">
						<Item>Version 1.0.0-next.40</Item>
					</svelte:fragment>
				</AppNavigation>
			</Content>
		</Menu>
	</svelte:fragment>
	<svelte:fragment slot="app-toolbar-end">
		<MenuButton autoHide="{true}" />
	</svelte:fragment>
	<slot />
</AppShell>

<style>
</style>
