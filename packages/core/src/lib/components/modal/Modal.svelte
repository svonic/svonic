<script lang="ts">
	import { browser } from '$app/env';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { OverlayEventDetail } from '@ionic/core/components';
	import type { IonModal } from '@ionic/core/components/ion-modal';
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
	// export let htmlAttributes: undefined | { [key: string]: any } | undefined = undefined;
	export let initialBreakpoint: number | undefined = undefined;
	export let isOpen = false;
	export let keyboardClose = true;
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let mode: ModeType = undefined;
	// export let presentingElement: HTMLElement | undefined = undefined;
	export let showBackdrop = true;
	export let swipeToClose = false;
	export let trigger: string | undefined = undefined;

	export const dismiss = async (data?: any, role?: string | undefined) => {
		if (browser && component) {
			return await component.dismiss(data, role);
		}
	};

	export const getCurrentBreakpoint = async () => {
		if (browser && component) {
			return await component.getCurrentBreakpoint();
		}
	};

	export const onDidDismiss = async () => {
		if (browser && component) {
			return await component.onDidDismiss();
		}
	};

	export const onWillDismiss = async () => {
		if (browser && component) {
			return await component.onDidDismiss();
		}
	};

	export const present = async () => {
		if (browser && component) {
			return await component.present();
		}
	};

	export const setCurrentBreakpoint = async (breakpoint: number) => {
		if (browser && component) {
			return await component.setCurrentBreakpoint(breakpoint);
		}
	};

	if (browser) {
		onMount(async () => {
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonModal = (await import('@ionic/core/components/ion-modal')).IonModal;

			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-modal', IonModal);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBreakpointDidChange = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('svo:breakpoint-did-change', eventDetail);
	};

	const onIonModalDidDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		isOpen = false;

		dispatch('svo:did-dismiss', eventDetail);
	};

	const onIonModalDidPresent = () => {
		const eventDetail = true;

		dispatch('svo:did-present', eventDetail);
	};

	const onIonModalWillDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('svo:will-dismiss', eventDetail);
	};

	const onIonModalWillPresent = () => {
		const eventDetail = true;

		dispatch('svo:will-present', eventDetail);
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
	initial-breakpoint="{initialBreakpoint}"
	is-open="{isOpen}"
	keyboard-close="{keyboardClose}"
	mode="{mode}"
	show-backdrop="{showBackdrop}"
	swipe-to-close="{swipeToClose}"
	trigger="{trigger}"
	bind:this="{component}"
	on:ionBreakpointDidChange="{onIonBreakpointDidChange}"
	on:ionModalDidDismiss="{onIonModalDidDismiss}"
	on:ionModalDidPresent="{onIonModalDidPresent}"
	on:ionModalWillDismiss="{onIonModalWillDismiss}"
	on:ionModalWillPresent="{onIonModalWillPresent}"
>
	<slot />
</ion-modal>

<style>
</style>
