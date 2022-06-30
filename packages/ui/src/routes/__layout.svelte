<script lang="ts">
	import AppNavigation from '$lib/components/app-navigation/AppNavigation.svelte';
	import AppShell from '$lib/components/app-shell/AppShell.svelte';
	import { mdiHomeAnalytics, mdiMonitorDashboard, mdiRobotHappyOutline } from '@mdi/js';
	import { Content, Drawer, DrawerButton, Item } from '@svonic/core';
	import '../app.css';

	const navList = [
		{ icon: mdiHomeAnalytics, iconTitle: 'Home Analytics', label: 'Index', route: '/' },
		{
			icon: mdiRobotHappyOutline,
			iconTitle: 'Robot Happy Outline',
			label: 'Command Bar',
			route: '/svonic/command-bar'
		},
		{
			icon: mdiMonitorDashboard,
			iconTitle: 'Monitor Dashboard',
			label: 'Panel',
			route: '/svonic/panel'
		}
	];
</script>

<AppShell headerColor="light">
	<svelte:fragment slot="app-toolbar-title">App Title</svelte:fragment>
	<svelte:fragment slot="drawer-end">
		<Drawer contentId="main" id="main-menu" side="end" type="overlay">
			<!-- <Header translucent="{true}">
				<Toolbar>
					<Title>App Menu</Title>
				</Toolbar>
			</Header> -->
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
