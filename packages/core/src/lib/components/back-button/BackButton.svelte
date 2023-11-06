<script lang="ts">
	import type { ButtonType, ColorType, CssClassType, HrefType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonBackButton } from '@ionic/core/components/ion-back-button';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	type FabButtonSizeType = 'small' | undefined;

	let component: IonBackButton;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let defaultHref: HrefType = undefined;
	export let disabled = false;
	export let icon: string | undefined = undefined;
	export let mode: ModeType = undefined;
	// export let routerAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let text: null |string | undefined = undefined;
	export let type: ButtonType = 'button';

	if (BROWSER) {
		onMount(async () => {
			const IonBackButton = (await import('@ionic/core/components/ion-back-button')).IonBackButton;
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-back-button', IonBackButton);
			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);
		});
	}
</script>

<ion-back-button
	class="{cssClass}"
	color="{color}"
	default-href="{defaultHref}"
	disabled="{disabled}"
	icon="{icon}"
	mode="{mode}"
	text="{text}"
	type="{type}"
	bind:this="{component}"
>
	<slot />
</ion-back-button>

<style>
</style>
