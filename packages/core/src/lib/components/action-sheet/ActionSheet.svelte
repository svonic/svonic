<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { ActionSheetButton, OverlayEventDetail } from '@ionic/core/components';
	import type { IonActionSheet } from '@ionic/core/components/ion-action-sheet';
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
	export let keyboardClose = true;
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let mode: ModeType = undefined;
	export let subHeader: string | undefined = undefined;
	export let translucent = false;

	export const dismiss = async (data?: any, role?: string | undefined) => {
		if (browser && component) {
			return await component.dismiss(data, role);
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

	if (browser) {
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

	const ionActionSheetDidDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('svo:did-dismiss', eventDetail);
	};

	const ionActionSheetDidPresent = () => {
		const eventDetail = true;

		dispatch('svo:did-present', eventDetail);
	};

	const ionActionSheetWillDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('svo:will-dismiss', eventDetail);
	};

	const ionActionSheetWillPresent = () => {
		const eventDetail = true;

		dispatch('svo:will-present', eventDetail);
	};
</script>

{#if componentIsReady}
	<ion-action-sheet
		animated="{animated}"
		backdrop-dismiss="{backdropDismiss}"
		buttons="{buttons}"
		css-class="{cssClass}"
		header="{header}"
		keyboard-close="{keyboardClose}"
		mode="{mode}"
		sub-header="{subHeader}"
		translucent="{translucent}"
		bind:this="{component}"
		on:ionActionSheetDidDismiss="{ionActionSheetDidDismiss}"
		on:ionActionSheetDidPresent="{ionActionSheetDidPresent}"
		on:ionActionSheetWillDismiss="{ionActionSheetWillDismiss}"
		on:ionActionSheetWillPresent="{ionActionSheetWillPresent}"
	>
		<slot />
	</ion-action-sheet>
{/if}
