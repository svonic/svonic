<script lang="ts">
	import type { CssClassType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type {
		OverlayEventDetail,
		PickerButton,
		PickerColumn
	} from '@ionic/core/components';
	import type { IonPicker } from '@ionic/core/components/ion-picker';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	let component: IonPicker;
	let cssClass: CssClassType = undefined;
	let componentIsReady = false;

	export { cssClass as class };

	export let animated = true;
	export let backdropDismiss = true;
	export let buttons: PickerButton[] = [];
	export let columns: PickerColumn[] = [];
	export let duration: number = 0;
	// export let enterAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	// export let htmlAttributes: undefined | { [key: string]: any } = undefined;
	export let isOpen = false;
	export let keyboardClose = true;
	// export let leaveAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let mode: ModeType = undefined;
	export let showBackdrop = true;
	export let trigger: string | undefined = undefined;

	export const dismiss = async (data?: any, role?: string) => {
		if (BROWSER && component) {
			return await component.dismiss(data, role);
		}
	};

	export const getColumn = async (name: string) => {
		if (BROWSER && component) {
			return await component.getColumn(name);
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
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;
			const IonPicker = (await import('@ionic/core/components/ion-picker')).IonPicker;
			const IonPickerColumn = (await import('@ionic/core/components/ion-picker-column')).IonPickerColumn;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-backdrop', IonBackdrop);
			defineCustomElement('ion-picker', IonPicker);
			defineCustomElement('ion-picker-column', IonPickerColumn);
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
	<ion-picker
		animated="{animated}"
		backdrop-dismiss="{backdropDismiss}"
		buttons="{buttons}"
		columns="{columns}"
		css-class="{cssClass}"
		duration="{duration}"
		is-open="{isOpen}"
		keyboard-close="{keyboardClose}"
		mode="{mode}"
		show-backdrop="{showBackdrop}"
		trigger="{trigger}"
		bind:this="{component}"
		on:didDismiss="{didDismiss}"
		on:didPresent="{didPresent}"
		on:willDismiss="{willDismiss}"
		on:willPresent="{willPresent}"
	>
	</ion-picker>
{/if}
