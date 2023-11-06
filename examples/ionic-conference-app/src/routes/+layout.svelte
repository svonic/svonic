<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import {
		App,
		Content,
		Ionicon,
		Item,
		Label,
		List,
		ListHeader,
		Menu,
		MenuToggle,
		SplitPane,
		Toggle,
		menuController
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

<App
	class="{dark === true ? 'dark-theme' : ''}"
	id="ionic-app"
>
	<SplitPane
		class="app-menu"
		contentId="main-content"
	>
		<Menu
			contentId="main-content"
			menuId="main-menu"
			on:onIonDidClose="{onDidClose}"
			on:onIonDidOpen="{onDidOpen}"
			on:ionWillOpen="{onWillOpen}"
			on:ionWillClose="{onWillClose}"
		>
			<Content>
				<List lines="none">
					<ListHeader>Conference</ListHeader>

					{#each appPages as p}
						<MenuToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname.includes(basePathName + p.url) === true
									? 'selected'
									: ''}"
								detail="{false}"
								href="{basePathName + p.url}"
								svelteKitPrefetch="{true}"
							>
								<Ionicon
									icon="{p.icon}"
									slot="start"
								/>
								<Label>{p.title}</Label>
							</Item>
						</MenuToggle>
					{/each}
				</List>

				{#if loggedIn}
					<List lines="none">
						<ListHeader>Account</ListHeader>

						<MenuToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/account' ? 'selected' : ''}"
								detail="{false}"
								href="/account"
								svelteKitPrefetch="{true}"
							>
								<Ionicon
									icon="{person}"
									slot="start"
								/>
								<Label>Account</Label>
							</Item>
						</MenuToggle>

						<MenuToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/support' ? 'selected' : ''}"
								detail="{false}"
								href="/support"
								svelteKitPrefetch="{true}"
							>
								<Ionicon
									icon="{helpOutline}"
									slot="start"
								/>
								<Label>Support</Label>
							</Item>
						</MenuToggle>

						<MenuToggle autoHide="{false}">
							<Item
								button="{true}"
								detail="{false}"
								on:click="{logout}"
							>
								<Ionicon
									icon="{logOut}"
									slot="start"
								/>
								<Label>Logout</Label>
							</Item>
						</MenuToggle>
					</List>
				{/if}

				{#if !loggedIn}
					<List lines="none">
						<ListHeader>Account</ListHeader>

						<MenuToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/login' ? 'selected' : ''}"
								detail="{false}"
								href="/login"
								svelteKitPrefetch="{true}"
							>
								<Ionicon
									icon="{logIn}"
									slot="start"
								/>
								<Label>Login</Label>
							</Item>
						</MenuToggle>

						<MenuToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/support' ? 'selected' : ''}"
								detail="{false}"
								href="/support"
								svelteKitPrefetch="{true}"
							>
								<Ionicon
									icon="{helpOutline}"
									slot="start"
								/>
								<Label>Support</Label>
							</Item>
						</MenuToggle>

						<MenuToggle autoHide="{false}">
							<Item
								class="{$page.url.pathname === '/signup' ? 'selected' : ''}"
								detail="{false}"
								href="/signup"
								svelteKitPrefetch="{true}"
							>
								<Ionicon
									icon="{personAdd}"
									slot="start"
								/>
								<Label>Signup</Label>
							</Item>
						</MenuToggle>

						<Item>
							<Ionicon
								icon="{moonOutline}"
								slot="start"
							/>
							<Label>Dark Mode</Label>
							<Toggle bind:checked="{dark}" />
						</Item>
					</List>
				{/if}

				<List lines="none">
					<ListHeader>Tutorial</ListHeader>

					<MenuToggle autoHide="{false}">
						<Item
							button="{true}"
							svelteKitPrefetch="{true}"
							on:click="{openTutorial}"
						>
							<Ionicon
								icon="{hammer}"
								slot="start"
							/>
							<Label>Show Tutorial</Label>
						</Item>
					</MenuToggle>
				</List>
			</Content>
		</Menu>
		<div id="main-content">
			<slot />
		</div>
	</SplitPane>
</App>

<style>
</style>
