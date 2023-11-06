<script lang="ts">
	import { page } from '$app/stores';
	import { getComponentList, getPageList } from '$lib/data/data';
	import { mdiFormatPilcrowArrowLeft, mdiFormatPilcrowArrowRight } from '@mdi/js';
	import {
		Accordion,
		AccordionGroup,
		App,
		Button,
		Buttons,
		Content,
		Header,
		Icon,
		Ionicon,
		Item,
		Label,
		List,
		ListHeader,
		Menu,
		MenuButton,
		MenuToggle,
		SplitPane,
		Title,
		Toolbar,
		getConfig,
		type ModeType
	} from '@svonic/core';
	import { BROWSER } from 'esm-env';
	import {
		logoGithub,
		menu,
		menuOutline,
		menuSharp,
		moonOutline,
		sunnyOutline
	} from 'ionicons/icons/index.js';
	import { onMount, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import '../app.postcss';

	const mode: Writable<ModeType> = writable(getConfig()?.get('mode') ?? 'md');
	const navComponentList = getComponentList();
	const navPageList = getPageList();

	let appMode: ModeType;
	let darkMode = false;
	let isMenuActive: boolean | undefined = undefined;
	let isMenuVisible = false;
	let isSplitPaneActive = false;
	let isSplitPaneVisible = false;
	let menuComponent: Menu;
	let menuIcon = menuSharp;
	let rtlMode: 'ltr' | 'rtl' = 'ltr';
	let selectedComponent = '';
	let selectedComponentGroup = '';
	let showSplitPane = false;

	setContext('mode', mode);

	if (BROWSER) {
		onMount(async () => {
			appMode = getConfig()?.get('mode') ?? 'md';
		});
	}

	const onMenuDidClose = async (event: CustomEvent) => {
		isMenuVisible = false;

		if (menuComponent) {
			isMenuActive = await menuComponent.isActive();
		}

		if (isMenuActive === true) {
			isSplitPaneActive = false;
		}
	};

	const onMenuDidOpen = async (event: CustomEvent) => {
		isMenuVisible = true;

		if (menuComponent) {
			isMenuActive = await menuComponent.isActive();
		}

		if (isMenuActive === true) {
			isSplitPaneActive = false;
		}
	};

	const onOrientationChange = async () => {
		if (menuComponent) {
			isMenuActive = await menuComponent.isActive();
		}

		if (isMenuActive === true) {
			isSplitPaneActive = false;
		}
	};

	const onSplitPaneVisible = async (event: CustomEvent) => {
		isSplitPaneVisible = event.detail.visible;

		if (isSplitPaneVisible === true) {
			isMenuActive = false;
			isSplitPaneActive = true;
		}

		if (isSplitPaneVisible === false && showSplitPane === true) {
			isSplitPaneActive = true;
		}

		if (isMenuActive === true) {
			isSplitPaneActive = false;
		}
	};

	const setSelectedGroup = (name: string) => {
		const componentGroup = navComponentList.find((groupItem) => {
			return groupItem.groupList.find((item) => {
				if (item.name === name) {
					return item.name;
				}
			});
		});

		if (componentGroup) {
			selectedComponentGroup = componentGroup.group;
		}
	};

	const toogleDarkMode = () => {
		darkMode = !darkMode;
	};

	const toogleRTLMode = () => {
		if (rtlMode === 'ltr') {
			rtlMode = 'rtl';

			document.dir = rtlMode;
		} else {
			rtlMode = 'ltr';

			document.dir = rtlMode;
		}
	};

	const toggleSplitPane = () => {
		showSplitPane = !showSplitPane;
	};

	// const scrollIntoView = ({ currentTarget }) => {
	// 	const scrollToElement = document.querySelector(currentTarget.getAttribute('href'));

	// 	if (!scrollToElement) return;

	// 	scrollToElement.scrollIntoView({
	// 		behavior: 'smooth'
	// 	});
	// };

	// const setAnchorLink = (title: string) => {
	// 	urlHash = title.toLowerCase().replace(/\s/g, '-');
	// };

	$: {
		selectedComponent = $page.url.pathname.split('/').pop() ?? '';
		setSelectedGroup(selectedComponent);
	}

	$: menuIcon = appMode === 'ios' ? menuOutline : menuSharp;
	// $: setAnchorLink(title);
</script>

<svelte:window on:resize="{onOrientationChange}" />

<App class="{darkMode === true ? 'dark' : ''}">
	<SplitPane
		class="app-menu"
		contentId="main-content"
		disabled="{showSplitPane}"
		on:ionSplitPaneVisible="{onSplitPaneVisible}"
	>
		<Menu
			contentId="main-content"
			menuId="main-menu"
			bind:this="{menuComponent}"
			on:ionDidClose="{onMenuDidClose}"
			on:ionDidOpen="{onMenuDidOpen}"
		>
			<Header>
				<Toolbar>
					<Title>Svonic</Title>
				</Toolbar>
			</Header>
			<Content class="dark:border-x-neutral-900 ltr:border-r-2 rtl:border-l-2">
				<List lines="none">
					<ListHeader class="text-lg font-bold">Overview</ListHeader>
					{#each navPageList as page}
						<MenuToggle autoHide="{false}">
							<Item
								detail="{false}"
								href="{page.route}"
								svelteKitPrefetch="{true}"
							>
								<Label>{page.label}</Label>
							</Item>
						</MenuToggle>
					{/each}
					<AccordionGroup
						multiple="{true}"
						value="svonic-core"
					>
						<Accordion
							toggleIconSlot="end"
							value="svonic-core"
						>
							<Item slot="header">
								<Label class="text-lg font-bold">Svonic Core</Label>
							</Item>
							<List slot="content">
								{#each navComponentList as componentGroup}
									<AccordionGroup
										multiple="{true}"
										value="{selectedComponentGroup}"
									>
										<Accordion
											toggleIconSlot="end"
											value="{componentGroup.group}"
										>
											<Item slot="header">
												<Label class="pl-2">{componentGroup.group}</Label>
											</Item>
											<List slot="content">
												{#each componentGroup.groupList as component}
													<Item
														class="{selectedComponent === component.name ? 'selected' : ''}"
														detail="{false}"
														href="{component.route}"
														svelteKitPrefetch="{true}"
													>
														<Label class="pl-4">{component.label}</Label>
													</Item>
												{/each}
											</List>
										</Accordion>
									</AccordionGroup>
								{/each}
							</List>
						</Accordion>
					</AccordionGroup>
				</List>
			</Content>
		</Menu>
		<div
			class="ion-page"
			id="main-content"
		>
			<Header>
				<Toolbar>
					<Buttons slot="start">
						{#if isSplitPaneActive === true}
							<Button on:click="{toggleSplitPane}">
								<Ionicon
									icon="{menuIcon}"
									slot="icon-only"
								/></Button
							>
						{:else}
							<MenuButton autoHide="{true}"></MenuButton>
						{/if}
					</Buttons>
					<Buttons slot="end">
						<Button
							href="https://github.com/svonic/svonic"
							target="_blank"
						>
							<Ionicon
								icon="{logoGithub}"
								slot="icon-only"
							/>
						</Button>
						<Button on:click="{toogleRTLMode}">
							{#if rtlMode === 'ltr'}
								<Icon
									path="{mdiFormatPilcrowArrowRight}"
									slot="icon-only"
								/>
							{:else}
								<Icon
									path="{mdiFormatPilcrowArrowLeft}"
									slot="icon-only"
								/>
							{/if}
						</Button>
						<Button on:click="{toogleDarkMode}">
							{#if darkMode === false}
								<Ionicon
									icon="{moonOutline}"
									slot="icon-only"
								/>
							{:else}
								<Ionicon
									color="warning"
									icon="{sunnyOutline}"
									slot="icon-only"
								/>
							{/if}
						</Button>
					</Buttons>
				</Toolbar>
			</Header>
			<slot />
		</div>
	</SplitPane>
</App>

<style>
</style>
