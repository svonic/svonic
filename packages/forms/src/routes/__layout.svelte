<script lang="ts">
	import { mdiHomeAnalytics, mdiRobotHappyOutline } from '@mdi/js';
	import { Content, Drawer, DrawerButton, Item } from '@svonic/core';
	import { AppNavigation, AppShell } from '@svonic/ui';
	import '../app.css';

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
	<svelte:fragment slot="drawer-end">
		<Drawer contentId="main" id="main-menu" side="end" type="overlay">
			<Content>
				<AppNavigation navList="{navList}">
					<svelte:fragment slot="end">
						<Item>Version 1.0.0-next.34</Item>
					</svelte:fragment>
				</AppNavigation>
			</Content>
		</Drawer>
	</svelte:fragment>
	<svelte:fragment slot="app-toolbar-end">
		<DrawerButton autoHide="{true}" />
	</svelte:fragment>
	<slot />
</AppShell>
