<script lang="ts">
	import type { CssClassType, SideType } from '$lib/types';
	import { componentOnReady, defineCustomElement } from '$lib/utils/utils';
	import type { MenuCustomEvent } from '@ionic/core/components';
	import type { IonMenu } from '@ionic/core/components/ion-menu';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	type MenuType = 'overlay' | 'push' | 'reveal' | undefined;

	let component: IonMenu;
	let componentIsReady = false;
	let cssClass: CssClassType = '';
	let isPaneVisible = false;
	let isPane: Function | undefined;

	export { cssClass as class };

	export let contentId: string | undefined = undefined;
	export let disabled = false;
	export let maxEdgeStart = 50;
	export let menuId: string | undefined = undefined;
	export let side: SideType = 'start';
	export let swipeGesture = true;
	export let type: MenuType = undefined;

	export const close = async (animated?: boolean) => {
		if (BROWSER && component) {
			return await component.close(animated);
		}
	};

	export const isActive = async () => {
		if (BROWSER && component) {
			return await component.isActive();
		}
	};

	export const isOpen = async () => {
		if (BROWSER && component) {
			return await component.isOpen();
		}
	};

	export const open = async (animated?: boolean) => {
		if (BROWSER && component) {
			return await component.open(animated);
		}
	};

	export const setOpen = async (shouldOpen: boolean, animated?: boolean) => {
		if (BROWSER && component) {
			return await component.setOpen(shouldOpen, animated);
		}
	};

	export const toggle = async (animated?: boolean) => {
		if (BROWSER && component) {
			return await component.toggle(animated);
		}
	};

	if (BROWSER) {
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
		if (componentIsReady && (await component?.isActive()) === true) {
			const menuOpen = await isOpen();

			if (disabled === false && isPaneVisible === true && menuOpen === false) {
				const splitPaneVisibleEvent = new CustomEvent('ionSplitPaneVisible', {
					detail: { visible: isPaneVisible, isPane: isPane },
					bubbles: true, // Allow event to bubble up the DOM
					cancelable: true // Allow event to be canceled
				});

				// Get a reference to the splitPane element
				const splitPane = document.querySelector('ion-split-pane');

				// Emit the custom event
				if (splitPane) {
					splitPane.dispatchEvent(splitPaneVisibleEvent);
				}
			}
		}
	};

	$: isPaneVisible, fixMenuPaneVisible();

	const onIonDidClose = (event: MenuCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionDidClose', eventDetail);
	};

	const onIonDidOpen = (event: MenuCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionDidOpen', eventDetail);
	};

	const onIonWillClose = (event: MenuCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionWillClose', eventDetail);
	};

	const onIonWillOpen = (event: MenuCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionWillOpen', eventDetail);
	};

	const onSplitPaneChanged = async (event: CustomEvent) => {
		isPaneVisible = event.detail.visible;
		isPane = event.detail.isPane;
	};
</script>

<svelte:body on:ionSplitPaneVisible="{onSplitPaneChanged}" />

<ion-menu
	class="{cssClass}"
	content-id="{contentId}"
	disabled="{disabled}"
	max-edge-start="{maxEdgeStart}"
	menu-id="{menuId}"
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
