<script lang="ts">
	import type { CssClassType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { ActionSheetButton, OverlayEventDetail } from '@ionic/core/components';
	import type { IonActionSheet } from '@ionic/core/components/ion-action-sheet';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	let component: IonActionSheet;
	let cssClass: CssClassType = undefined;
	let componentIsReady = false;

	export { cssClass as class };

	export let animated = true;
	export let backdropDismiss = true;
	export let buttons: (string | ActionSheetButton<any>)[] = [];
	// export let enterAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let header: string | undefined = undefined;
	// export let htmlAttributes: undefined | { [key: string]: any } = undefined;
	export let isOpen = false;
	export let keyboardClose = true;
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let mode: ModeType = undefined;
	export let subHeader: string | undefined = undefined;
	export let translucent = false;
	export let trigger: string | undefined = undefined;

	export const dismiss = async (data?: any, role?: string | undefined) => {
		if (BROWSER && component) {
			return await component.dismiss(data, role);
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

	if (BROWSER) {
		onMount(async () => {
			const IonActionSheet = (await import('@ionic/core/components/ion-action-sheet'))
				.IonActionSheet;
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-action-sheet', IonActionSheet);
			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);

			componentIsReady = true;

			await tick();
		});
	}

	const dispatch = createEventDispatcher();

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

{#if componentIsReady}
	<ion-action-sheet
		animated="{animated}"
		backdrop-dismiss="{backdropDismiss}"
		buttons="{buttons}"
		css-class="{cssClass}"
		header="{header}"
		is-open="{isOpen}"
		keyboard-close="{keyboardClose}"
		mode="{mode}"
		sub-header="{subHeader}"
		translucent="{translucent}"
		trigger="{trigger}"
		bind:this="{component}"
		on:ionActionSheetDidDismiss="{didDismiss}"
		on:ionActionSheetDidPresent="{didPresent}"
		on:ionActionSheetWillDismiss="{willDismiss}"
		on:ionActionSheetWillPresent="{willPresent}"
	>
	</ion-action-sheet>
{/if}
