<script lang="ts">
	import { page } from '$app/stores';
	import { getComponentList, getPageList } from '$lib/data/data';
	import { mdiFormatPilcrowArrowLeft, mdiFormatPilcrowArrowRight } from '@mdi/js';
	import {
		Accordion,
		AccordionGroup,
		Application,
		Button,
		ButtonGroup,
		Content,
		Drawer,
		DrawerButton,
		DrawerToggle,
		getConfig,
		Header,
		Icon,
		Ionicon,
		Item,
		Label,
		List,
		ListHeader,
		NavigationPane,
		Title,
		Toolbar,
		type ModeType
	} from '@svonic/core';
	import { logoGithub, moonOutline, sunnyOutline } from 'ionicons/icons/index.js';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import '../app.postcss';

	const mode: Writable<ModeType> = writable(getConfig()?.get('mode') ?? 'md');
	const navComponentList = getComponentList();
	const navPageList = getPageList();

	let darkMode = false;
	let rtlMode: 'ltr' | 'rtl' = 'ltr';
	let selectedComponent = '';
	let selectedComponentGroup = '';

	setContext('mode', mode);

	const toogleDarkMode = () => {
		darkMode = !darkMode;
	};

	const toogleRTLMode = () => {
		console.log('toogleRTLMode', rtlMode);
		if (rtlMode === 'ltr') {
			rtlMode = 'rtl';

			document.dir = rtlMode;
		} else {
			rtlMode = 'ltr';

			document.dir = rtlMode;
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
		console.log(selectedComponent);
		setSelectedGroup(selectedComponent);
	}

	// $: setAnchorLink(title);
</script>

<Application class="{darkMode === true ? 'dark' : ''}">
	<NavigationPane
		class="app-menu"
		contentId="main-content"
	>
		<Drawer
			contentId="main-content"
			id="main-menu"
		>
			<Header>
				<Toolbar>
					<Title>Svonic</Title>
				</Toolbar>
			</Header>
			<Content class="dark:border-x-neutral-900 ltr:border-r-2 rtl:border-l-2">
				<List lines="none">
					<ListHeader class="font-bold text-lg">Overview</ListHeader>
					{#each navPageList as page}
						<DrawerToggle autoHide="{false}">
							<Item
								detail="{false}"
								href="{page.route}"
								svelteKitPrefetch="{true}"
							>
								<Label>{page.label}</Label>
							</Item>
						</DrawerToggle>
					{/each}
					<AccordionGroup
						multiple="{true}"
						value="svonic-core"
					>
						<Accordion
							toggleIconSlot="end"
							value="svonic-core"
						>
							<Item toSlot="header">
								<Label class="font-bold text-lg">Svonic Core</Label>
							</Item>
							<List toSlot="content">
								{#each navComponentList as componentGroup}
									<AccordionGroup
										multiple="{true}"
										value="{selectedComponentGroup}"
									>
										<Accordion
											toggleIconSlot="end"
											value="{componentGroup.group}"
										>
											<Item toSlot="header">
												<Label class="pl-2">{componentGroup.group}</Label>
											</Item>
											<List toSlot="content">
												{#each componentGroup.groupList as component}
													<DrawerToggle autoHide="{false}">
														<Item
															class="{selectedComponent === component.name ? 'selected' : ''}"
															detail="{false}"
															href="{component.route}"
															svelteKitPrefetch="{true}"
														>
															<Label class="pl-4">{component.label}</Label>
														</Item>
													</DrawerToggle>
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
		</Drawer>
		<div
			class="ion-page"
			id="main-content"
		>
			<Header>
				<Toolbar>
					<ButtonGroup toSlot="start">
						<DrawerButton />
					</ButtonGroup>
					<ButtonGroup toSlot="end">
						<Button
							href="https://github.com/svonic/svonic"
							target="_blank"
						>
							<Ionicon
								icon="{logoGithub}"
								toSlot="icon-only"
							/>
						</Button>
						<Button on:click="{toogleRTLMode}">
							{#if rtlMode === 'ltr'}
								<Icon
									path="{mdiFormatPilcrowArrowRight}"
									toSlot="icon-only"
								/>
							{:else}
								<Icon
									path="{mdiFormatPilcrowArrowLeft}"
									toSlot="icon-only"
								/>
							{/if}
						</Button>
						<Button on:click="{toogleDarkMode}">
							{#if darkMode === false}
								<Ionicon
									icon="{moonOutline}"
									toSlot="icon-only"
								/>
							{:else}
								<Ionicon
									color="warning"
									icon="{sunnyOutline}"
									toSlot="icon-only"
								/>
							{/if}
						</Button>
					</ButtonGroup>
				</Toolbar>
			</Header>
			<slot />
		</div>
	</NavigationPane>
</Application>

<style>
</style>
