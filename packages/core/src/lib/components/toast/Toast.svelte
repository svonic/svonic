<script lang="ts">
  import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonicSafeString, OverlayEventDetail, ToastButton } from '@ionic/core/components';
	import type { IonToast } from '@ionic/core/components/ion-toast';
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
	export let keyboardClose = true;
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let message: IonicSafeString | string | undefined = undefined;
	export let mode: ModeType = undefined;
	export let position: ToastPositionType = 'bottom';
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

	const onIonToastDidDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('svo:did-dismiss', eventDetail);
	};

	const onIonToastDidPresent = () => {
		const eventDetail = true;

		dispatch('svo:did-present', eventDetail);
	};

	const onIonToastWillDismiss = (event: CustomEvent) => {
		const eventDetail: OverlayEventDetail = event.detail;

		dispatch('svo:will-dismiss', eventDetail);
	};

	const onIonToastWillPresent = () => {
		const eventDetail = true;

		dispatch('svo:will-present', eventDetail);
	};
</script>

<ion-toast
	animated="{animated}"
	buttons="{buttons}"
	class="{cssClass}"
	color="{color}"
	duration="{duration}"
	header="{header}"
	icon="{icon}"
	keyboard-close="{keyboardClose}"
	message="{message}"
	mode="{mode}"
	position="{position}"
	translucent="{translucent}"
	bind:this="{component}"
	on:click
	on:ionToastDidDismiss="{onIonToastDidDismiss}"
	on:ionToastDidPresent="{onIonToastDidPresent}"
	on:ionToastWillDismiss="{onIonToastWillDismiss}"
	on:ionToastWillPresent="{onIonToastWillPresent}"
>
	<slot />
</ion-toast>
