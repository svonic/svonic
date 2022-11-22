<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import {
		Application,
		Content,
		Drawer,
		DrawerToggle,
		Ionicon,
		Item,
		Label,
		List,
		ListHeader,
		menuController,
		NavigationPane,
		Toggle
	} from '@svonic/core';
	import {
		calendarOutline,
		hammer,
		helpOutline,
		informationCircleOutline,
		logIn,
		logOut,
		mapOutline,
		moonOutline,
		peopleOutline,
		person,
		personAdd
	} from 'ionicons/icons/index.js';
	import '../app.css';
	import './app-menu.css';

	export let loggedIn = false;

	export let data;

	const appPages = [
		{
			title: 'Schedule',
			url: '/schedule',
			icon: calendarOutline
		},
		{
			title: 'Speakers',
			url: '/speakers',
			icon: peopleOutline
		},
		{
			title: 'Map',
			url: '/map',
			icon: mapOutline
		},
		{
			title: 'About',
			url: '/about',
			icon: informationCircleOutline
		}
	];

	let basePathName = '';
	let dark = false;

	$: {
		const urlBasePathName = $page.url.pathname.split('/').slice(0, -1).join('/');

		if (urlBasePathName === 'app/tabs') {
			basePathName = '';
		} else {
			basePathName = '/app/tabs';
		}
	}

	const logout = (): void => {
		loggedIn = false;
		// this.userData.logout().then(() => {
		//   return this.router.navigateByUrl('/schedule');
		// });
	};

	const openTutorial = async (): Promise<void> => {
		await menuController.enable(false);
		//   this.storage.set('ion_did_tutorial', false);
		//   this.router.navigateByUrl('/tutorial');
		await goto('/tutorial');
	};

	const onDidClose = (): void => {
		// console.log('menu onDidClose');
	};

	const onDidOpen = (): void => {
		// console.log('menu onDidOpen');
	};

	const onWillOpen = (): void => {
		// console.log('menu onWillOpen');
	};

	const onWillClose = (): void => {
		// console.log('menu onWillClose');
	};
</script>

<Application class="{dark === true ? 'dark-theme' : ''}" id="ionic-app">
	<NavigationPane class="app-menu" contentId="main-content">
		<Drawer
			contentId="main-content"
			id="main-menu"
			on:svo:did-close="{onDidClose}"
			on:svo:did-open="{onDidOpen}"
			on:svo:will-open="{onWillOpen}"
			on:svo:will-close="{onWillClose}"
		>
			<Content>
				<List lines="none">
					<ListHeader>Conference</ListHeader>

					{#each appPages as p}
						<DrawerToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname.includes(basePathName + p.url) === true
									? 'selected'
									: ''}"
								detail="{false}"
								href="{basePathName + p.url}"
								svelteKitPrefetch="{true}"
							>
								<Ionicon icon="{p.icon}" toSlot="start" />
								<Label>{p.title}</Label>
							</Item>
						</DrawerToggle>
					{/each}
				</List>

				{#if loggedIn}
					<List lines="none">
						<ListHeader>Account</ListHeader>

						<DrawerToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/account' ? 'selected' : ''}"
								detail="{false}"
								href="/account"
								svelteKitPrefetch="{true}"
							>
								<Ionicon icon="{person}" toSlot="start" />
								<Label>Account</Label>
							</Item>
						</DrawerToggle>

						<DrawerToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/support' ? 'selected' : ''}"
								detail="{false}"
								href="/support"
								svelteKitPrefetch="{true}"
							>
								<Ionicon icon="{helpOutline}" toSlot="start" />
								<Label>Support</Label>
							</Item>
						</DrawerToggle>

						<DrawerToggle autoHide="{false}">
							<Item button="{true}" detail="{false}" on:click="{logout}">
								<Ionicon icon="{logOut}" toSlot="start" />
								<Label>Logout</Label>
							</Item>
						</DrawerToggle>
					</List>
				{/if}

				{#if !loggedIn}
					<List lines="none">
						<ListHeader>Account</ListHeader>

						<DrawerToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/login' ? 'selected' : ''}"
								detail="{false}"
								href="/login"
								svelteKitPrefetch="{true}"
							>
								<Ionicon icon="{logIn}" toSlot="start" />
								<Label>Login</Label>
							</Item>
						</DrawerToggle>

						<DrawerToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/support' ? 'selected' : ''}"
								detail="{false}"
								href="/support"
								svelteKitPrefetch="{true}"
							>
								<Ionicon icon="{helpOutline}" toSlot="start" />
								<Label>Support</Label>
							</Item>
						</DrawerToggle>

						<DrawerToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/signup' ? 'selected' : ''}"
								detail="{false}"
								href="/signup"
								svelteKitPrefetch="{true}"
							>
								<Ionicon icon="{personAdd}" toSlot="start" />
								<Label>Signup</Label>
							</Item>
						</DrawerToggle>

						<Item>
							<Ionicon icon="{moonOutline}" toSlot="start" />
							<Label>Dark Mode</Label>
							<Toggle bind:checked="{dark}" />
						</Item>
					</List>
				{/if}

				<List lines="none">
					<ListHeader>Tutorial</ListHeader>

					<DrawerToggle autoHide="{false}">
						<Item button="{true}" svelteKitPrefetch="{true}" on:click="{openTutorial}">
							<Ionicon icon="{hammer}" toSlot="start" />
							<Label>Show Tutorial</Label>
						</Item>
					</DrawerToggle>
				</List>
			</Content>
		</Drawer>
		<div id="main-content">
			<slot />
		</div>
	</NavigationPane>
</Application>

<style>
</style>
