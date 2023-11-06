<script lang="ts">
	import type { CssClassType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { OverlayEventDetail } from '@ionic/core/components';
	import type { IonModal } from '@ionic/core/components/ion-modal';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonModal;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let animated = true;
	export let backdropBreakpoint = 0;
	export let backdropDismiss = true;
	export let breakpoints: number[] | undefined = undefined;
	export let canDismiss: (() => Promise<boolean>) | boolean | undefined = undefined;
	// export let enterAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let handle: boolean | undefined = undefined;
	export let handleBehavior: 'cycle' | 'none' | undefined = undefined;
	// export let htmlAttributes: undefined | { [key: string]: any } | undefined = undefined;
	export let initialBreakpoint: number | undefined = undefined;
	export let isOpen = false;
	export let keepContentsMounted = false;
	export let keyboardClose = true;
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let mode: ModeType = undefined;
	// export let presentingElement: HTMLElement | undefined = undefined;
	export let showBackdrop = true;
	export let swipeToClose = false;
	export let trigger: string | undefined = undefined;

	export const dismiss = async (data?: any, role?: string | undefined) => {
		if (BROWSER && component) {
			return await component.dismiss(data, role);
		}
	};

	export const getCurrentBreakpoint = async () => {
		if (BROWSER && component) {
			return await component.getCurrentBreakpoint();
		}
	};

	export const onDidDismiss = async () => {
		if (BROWSER && component) {
			return await component.onDidDismiss();
		}
	};

	export const onWillDismiss = async () => {
		if (BROWSER && component) {
			return await component.onDidDismiss();
		}
	};

	export const present = async () => {
		if (BROWSER && component) {
			return await component.present();
		}
	};

	export const setCurrentBreakpoint = async (breakpoint: number) => {
		if (BROWSER && component) {
			return await component.setCurrentBreakpoint(breakpoint);
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonModal = (await import('@ionic/core/components/ion-modal')).IonModal;

			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-modal', IonModal);
		});
	}

	const dispatch = createEventDispatcher();

	const breakpointDidChange = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('ionBreakpointDidChange', eventDetail);
	};

	const didDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('didDismiss', eventDetail);
	};

	const didPresent = () => {
		const eventDetail = true;

		dispatch('didPresent', eventDetail);
	};

	const willDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('willDismiss', eventDetail);
	};

	const willPresent = () => {
		const eventDetail = true;

		dispatch('willPresent', eventDetail);
	};
</script>

<ion-modal
	animated="{animated}"
	backdrop-breakpoint="{backdropBreakpoint}"
	backdrop-dismiss="{backdropDismiss}"
	breakpoints="{breakpoints}"
	can-dismiss="{canDismiss}"
	class="{cssClass}"
	handle="{handle}"
	handle-behavior="{handleBehavior}"
	initial-breakpoint="{initialBreakpoint}"
	is-open="{isOpen}"
	keep-contents-mounted="{keepContentsMounted}"
	keyboard-close="{keyboardClose}"
	mode="{mode}"
	show-backdrop="{showBackdrop}"
	swipe-to-close="{swipeToClose}"
	trigger="{trigger}"
	bind:this="{component}"
	on:ionBreakpointDidChange="{breakpointDidChange}"
	on:ionModalDidDismiss="{didDismiss}"
	on:ionModalDidPresent="{didPresent}"
	on:ionModalWillDismiss="{willDismiss}"
	on:ionModalWillPresent="{willPresent}"
>
	<slot />
</ion-modal>

<style>
</style>
