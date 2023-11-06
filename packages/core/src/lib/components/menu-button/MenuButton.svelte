<script lang="ts">
	import type { ButtonType, ColorType, CssClassType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonMenuButton } from '@ionic/core/components/ion-menu-button';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonMenuButton;
	let cssClass: CssClassType = '';

	export { cssClass as class };

	export let autoHide = true;
	export let color: ColorType = undefined;
	export let disabled = false;
	export let menu: 'end' | 'start' | string | undefined = undefined;
	export let mode: ModeType = undefined;
	export let type: ButtonType = 'button';

	if (BROWSER) {
		onMount(async () => {
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonMenuButton = (await import('@ionic/core/components/ion-menu-button')).IonMenuButton;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-menu-button', IonMenuButton);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);
		});
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-menu-button
	auto-hide="{autoHide}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	menu="{menu}"
	mode="{mode}"
	type="{type}"
	bind:this="{component}"
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</ion-menu-button>

<style>
</style>
