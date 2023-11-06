<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import {
		Ionicon,
		Label,
		Tab,
		TabBar,
		TabButton,
		Tabs
	} from '@svonic/core';
	import { calendar, informationCircle, location, people } from 'ionicons/icons/index.js';

	type TabType = 'about' | 'map' | 'schedule' | 'speakers';

	let basePathName = '/app/tabs';
	let pathname: TabType | string = '';
	let selectedTab: TabType;
	let TabsComponent: Tabs;

	$: {
		pathname = $page.url.pathname.split('/').find((pathname) => {
			return (
				pathname === 'about' ||
				pathname === 'map' ||
				pathname === 'schedule' ||
				pathname === 'speakers'
			);
		});

		// console.log('basePathName', basePathName);
		// console.log('pathname', pathname);

		if (
			pathname === 'about' ||
			pathname === 'map' ||
			pathname === 'schedule' ||
			pathname === 'speakers'
		) {
			setSelectedTab(pathname);
		}
	}

	// $: console.log('selectedTab', selectedTab);

	$: {
		if (TabsComponent?.select) {
			console.log('Tabs.select', TabsComponent.select);
			setTimeout(() => {
				setSelectedTab(pathname as TabType);
			}, 200);
		}
	}

	const navigateToTab = async (tabId: string) => {
		const route = `${basePathName}/${tabId}`;

		console.log('route', route);
		await goto(route);
	};

	const onTabDidChange = (ev: CustomEvent) => {
		const eventDetail = ev.detail;

		// console.log('ionTabsDidChange', eventDetail);
	};

	const setSelectedTab = async (tabId: TabType) => {
		if (
			selectedTab !== tabId &&
			(tabId === 'about' || tabId === 'map' || tabId === 'schedule' || tabId === 'speakers')
		) {
			selectedTab = tabId;
		}
		// console.log('selectedTab', selectedTab);

		// console.log('Tabs', Tabs);

		if (TabsComponent) {
			const TabsSelectedTab = await TabsComponent.getSelected();

			if (TabsSelectedTab !== selectedTab) {
				await TabsComponent.select(selectedTab);
			}
		}
	};
</script>

<Tabs
	bind:this="{TabsComponent}"
	on:ionTabsDidChange="{onTabDidChange}"
>
	<svelte:component
		this="{Tab}"
		tabId="{selectedTab}"
	>
		<slot />
	</svelte:component>

	<TabBar
		selectedTab="{selectedTab}"
		slot="bottom"
	>
		<TabButton
			href="{basePathName}/schedule"
			svelteKitPrefetch="{true}"
			tabId="{'schedule'}"
			on:click="{() => navigateToTab('schedule')}"
		>
			<Ionicon icon="{calendar}" />
			<Label>Schedule</Label>
		</TabButton>

		<TabButton
			href="{basePathName}/speakers"
			svelteKitPrefetch="{true}"
			tabId="{'speakers'}"
			on:click="{() => navigateToTab('speakers')}"
		>
			<Ionicon icon="{people}" />
			<Label>Speakers</Label>
		</TabButton>

		<TabButton
			href="{basePathName}/map"
			svelteKitPrefetch="{true}"
			tabId="{'map'}"
			on:click="{() => navigateToTab('map')}"
		>
			<Ionicon icon="{location}" />
			<Label>Map</Label>
		</TabButton>

		<TabButton
			href="{basePathName}/about"
			svelteKitPrefetch="{true}"
			tabId="{'about'}"
			on:click="{() => navigateToTab('about')}"
		>
			<Ionicon icon="{informationCircle}" />
			<Label>About</Label>
		</TabButton>
	</TabBar>
</Tabs>

<style>
</style>
