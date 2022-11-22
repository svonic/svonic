<script lang="ts">
  import { browser } from '$app/environment';
	import { menuController } from '$lib/controllers/menu';
	import type { ButtonType } from '$lib/types/button.type';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonMenuButton } from '@ionic/core/components/ion-menu-button';
	import { onMount } from 'svelte';

	let component: IonMenuButton;
	let cssClass: CssClassType = '';
	let currentCssClass: CssClassType = '';
	// let hidden = true;
	// let visible = false;

	export { cssClass as class };

	export let autoHide = true;
	export let color: ColorType = undefined;
	export let disabled = false;
	export let mode: ModeType = undefined;
	export let DrawerId: 'end' | 'start' | string | undefined = undefined;
	export let type: ButtonType = 'button';

	if (browser) {
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

	// Given a menu, return whether or not the menu toggle should be visible
	export const updateVisibility = async (menu: string | undefined) => {
		if (menuController?.get) {
			const menuEl = await menuController?.get(menu);

			return !!(menuEl && (await menuEl.isActive()));
		}
		return false;
	};

	// const onVisibilityChanged = async () => {
	// 	visible = await updateVisibility(DrawerId);

	// 	hidden = autoHide && !visible;

	// 	if (component?.classList) {
	// 		currentCssClass = Array.from(component.classList)
	// 			.filter((cssClass) => {
	// 				return !cssClass.startsWith('s-') && cssClass !== ' ';
	// 			})
	// 			.join(' ');

	// 		const hasHiddenCss = component.classList.contains('menu-button-hidden');

	// 		if (hidden && hasHiddenCss === false) {
	// 			currentCssClass = ' menu-button-hidden ' + currentCssClass;
	// 		}
	// 	}
	// };
</script>

<ion-menu-button
	auto-hide="{autoHide}"
	class="{cssClass}{currentCssClass}"
	color="{color}"
	disabled="{disabled}"
	menu="{DrawerId}"
	mode="{mode}"
	type="{type}"
	bind:this="{component}"
	on:click
>
	<slot />
</ion-menu-button>

<style>
</style>
