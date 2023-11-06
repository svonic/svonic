<script lang="ts">
	import type { CssClassType, ModeType, SpinnerType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type {
		IonicSafeString,
		OverlayEventDetail
	} from '@ionic/core/components';
	import type { IonLoading } from '@ionic/core/components/ion-loading';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	let component: IonLoading;
	let cssClass: CssClassType = undefined;
	let componentIsReady = false;

	export { cssClass as class };

	export let animated = true;
	export let backdropDismiss = true;
	export let duration: number = 0;
	// export let enterAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	// export let htmlAttributes: undefined | { [key: string]: any } = undefined;
	export let isOpen = false;
	export let keyboardClose = true;
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let message: IonicSafeString | string | undefined = undefined;
	export let mode: ModeType = undefined;
	export let showBackdrop = true;
	export let spinner: SpinnerType = undefined;
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
			const IonLoading = (await import('@ionic/core/components/ion-loading')).IonLoading;
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonSpinner = (await import('@ionic/core/components/ion-spinner')).IonSpinner;

			defineCustomElement('ion-loading', IonLoading);
			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-spinner', IonSpinner);

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
	<ion-loading
		animated="{animated}"
		backdrop-dismiss="{backdropDismiss}"
		css-class="{cssClass}"
		duration="{duration}"
		is-open="{isOpen}"
		keyboard-close="{keyboardClose}"
		message="{message}"
		mode="{mode}"
		show-backdrop="{showBackdrop}"
		spinner="{spinner}"
		translucent="{translucent}"
		trigger="{trigger}"
		bind:this="{component}"
		on:didDismiss="{didDismiss}"
		on:didPresent="{didPresent}"
		on:willDismiss="{willDismiss}"
		on:willPresent="{willPresent}"
	>
	</ion-loading>
{/if}
