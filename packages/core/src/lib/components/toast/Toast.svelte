<script lang="ts">
	import type { CssClassType, ColorType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonicSafeString, OverlayEventDetail, ToastButton } from '@ionic/core/components';
	import type { IonToast } from '@ionic/core/components/ion-toast';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	type ToastPositionType = 'bottom' | 'middle' | 'top';

	let component: IonToast;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let animated = true;
	export let buttons: (string | ToastButton)[] | undefined = undefined;
	export let color: ColorType = undefined;
	export let duration = 0;
	// export let enterAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let header: string | undefined = undefined;
	// export let htmlAttributes: { [key: string]: any } | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let isOpen = false;
	export let keyboardClose = true;
	export let layout: 'baseline' | 'stacked' = 'baseline';
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let message: IonicSafeString | string | undefined = undefined;
	export let mode: ModeType = undefined;
	export let position: ToastPositionType = 'bottom';
	export let positionAnchor: HTMLElement | undefined = undefined;
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
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;
			const IonToast = (await import('@ionic/core/components/ion-toast')).IonToast;

			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);
			defineCustomElement('ion-toast', IonToast);
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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-toast
	animated="{animated}"
	buttons="{buttons}"
	class="{cssClass}"
	color="{color}"
	duration="{duration}"
	header="{header}"
	icon="{icon}"
	is-open="{isOpen}"
	keyboard-close="{keyboardClose}"
	layout="{layout}"
	message="{message}"
	mode="{mode}"
	position="{position}"
	position-anchor="{positionAnchor}"
	translucent="{translucent}"
	trigger="{trigger}"
	bind:this="{component}"
	on:click
	on:didDismiss="{didDismiss}"
	on:didPresent="{didPresent}"
	on:willDismiss="{willDismiss}"
	on:willPresent="{willPresent}"
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</ion-toast>
