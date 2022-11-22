<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { SideType } from '$lib/types/side.type';
	import { componentOnReady, defineCustomElement } from '$lib/utils/utils';
	import type { MenuCustomEvent } from '@ionic/core/components';
	import type { IonMenu } from '@ionic/core/components/ion-menu';
	import type { IonSplitPane } from '@ionic/core/components/ion-split-pane';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	type DrawerType = 'overlay' | 'push' | 'reveal' | undefined;

	let component: IonMenu;
	let componentIsReady = false;
	let cssClass: CssClassType = '';
	let currentCssClass: CssClassType = '';
	let isPaneVisible = false;
	let isPane: Function | undefined;

	export { cssClass as class };

	export let contentId: string | undefined = undefined;
	export let disabled = false;
	export let id: string | undefined = undefined;
	export let maxEdgeStart = 50;
	export let side: SideType = 'start';
	export let swipeGesture = true;
	export let type: DrawerType = undefined;

	export const close = async (animated?: boolean) => {
		if (browser && component) {
			return await component.close(animated);
		}
	};

	export const isActive = async () => {
		if (browser && component) {
			return await component.isActive();
		}
	};

	export const isOpen = async () => {
		if (browser && component) {
			return await component.isOpen();
		}
	};

	export const open = async (animated?: boolean) => {
		if (browser && component) {
			return await component.open(animated);
		}
	};

	export const setOpen = async (shouldOpen: boolean, animated?: boolean) => {
		if (browser && component) {
			return await component.setOpen(shouldOpen, animated);
		}
	};

	export const toggle = async (animated?: boolean) => {
		if (browser && component) {
			return await component.toggle(animated);
		}
	};

	if (browser) {
		onMount(async () => {
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonMenu = (await import('@ionic/core/components/ion-menu')).IonMenu;

			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-menu', IonMenu);

			await new Promise((resolve) => componentOnReady(component, resolve));

			componentIsReady = true;

			await tick();

			fixMenuPaneVisible();
		});
	}

	const dispatch = createEventDispatcher();

	const fixMenuPaneVisible = async () => {
		if (componentIsReady && component?.isOpen) {
			const menuOpen = await isOpen();

			if (disabled === false && isPaneVisible === true && menuOpen === false) {
				const splitPane: IonSplitPane = document.querySelector('ion-split-pane');

				splitPane.ionSplitPaneVisible.emit({ visible: isPaneVisible, isPane: isPane });
			}
		}
	};

	const onIonDidClose = (event: MenuCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:did-close', eventDetail);
	};

	const onIonDidOpen = (event: MenuCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:did-open', eventDetail);
	};

	const onIonWillClose = (event: MenuCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:will-close', eventDetail);
	};

	const onIonWillOpen = (event: MenuCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:will-open', eventDetail);
	};

	const onSplitPaneChanged = async (event: CustomEvent) => {
		isPaneVisible = event.detail.visible;
		isPane = event.detail.isPane;
	};
</script>

<svelte:body on:ionSplitPaneVisible="{onSplitPaneChanged}" />

<ion-menu
	class="{cssClass}{currentCssClass}"
	content-id="{contentId}"
	disabled="{disabled}"
	max-edge-start="{maxEdgeStart}"
	menu-id="{id}"
	side="{side}"
	swipe-gesture="{swipeGesture}"
	type="{type}"
	bind:this="{component}"
	on:ionDidClose="{onIonDidClose}"
	on:ionDidOpen="{onIonDidOpen}"
	on:ionWillClose="{onIonWillClose}"
	on:ionWillOpen="{onIonWillOpen}"
>
	<slot />
</ion-menu>
