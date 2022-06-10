<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import {
		Ionicon,
		Label,
		NavigationTab,
		NavigationTabBar,
		NavigationTabButton,
		NavigationTabGroup
	} from '@svonic/core';
	import { calendar, informationCircle, location, people } from 'ionicons/icons/index.js';

	type TabType = 'about' | 'map' | 'schedule' | 'speakers';

	let basePathName = '/app/tabs';
	let pathname: TabType | string = '';
	let selectedTab: TabType;
	let tabGroup: NavigationTabGroup;

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
		if (tabGroup?.select) {
			console.log('tabGroup.select', tabGroup.select);
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

		// console.log('svo:did-change', eventDetail);
	};

	const setSelectedTab = async (tabId: TabType) => {
		if (
			selectedTab !== tabId &&
			(tabId === 'about' || tabId === 'map' || tabId === 'schedule' || tabId === 'speakers')
		) {
			selectedTab = tabId;
		}
		// console.log('selectedTab', selectedTab);

		// console.log('NavigationTabGroup', tabGroup);

		if (tabGroup) {
			const tabGroupSelectedTab = await tabGroup.getSelected();

			if (tabGroupSelectedTab !== selectedTab) {
				await tabGroup.select(selectedTab);
			}
		}
	};
</script>

<NavigationTabGroup bind:this="{tabGroup}" on:svo:did-change="{onTabDidChange}">
	<svelte:component this="{NavigationTab}" tabId="{selectedTab}">
		<slot />
	</svelte:component>

	<NavigationTabBar selectedTab="{selectedTab}" toSlot="bottom">
		<NavigationTabButton
			href="{basePathName}/schedule"
			svelteKitPrefetch="{true}"
			tabId="{'schedule'}"
			on:click="{() => navigateToTab('schedule')}"
		>
			<Ionicon icon="{calendar}" />
			<Label>Schedule</Label>
		</NavigationTabButton>

		<NavigationTabButton
			href="{basePathName}/speakers"
			svelteKitPrefetch="{true}"
			tabId="{'speakers'}"
			on:click="{() => navigateToTab('speakers')}"
		>
			<Ionicon icon="{people}" />
			<Label>Speakers</Label>
		</NavigationTabButton>

		<NavigationTabButton
			href="{basePathName}/map"
			svelteKitPrefetch="{true}"
			tabId="{'map'}"
			on:click="{() => navigateToTab('map')}"
		>
			<Ionicon icon="{location}" />
			<Label>Map</Label>
		</NavigationTabButton>

		<NavigationTabButton
			href="{basePathName}/about"
			svelteKitPrefetch="{true}"
			tabId="{'about'}"
			on:click="{() => navigateToTab('about')}"
		>
			<Ionicon icon="{informationCircle}" />
			<Label>About</Label>
		</NavigationTabButton>
	</NavigationTabBar>
</NavigationTabGroup>

<style>
</style>
