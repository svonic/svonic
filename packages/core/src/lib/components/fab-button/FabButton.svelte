<script lang="ts">
	import type { CssClassType, ColorType, DownloadType, HrefType, ModeType, RelType, RouterDirectionType, TargetType, ButtonType } from '$lib/types';
	import { addSvelteKitPrefetchAttribute, defineCustomElement } from '$lib/utils/utils';
	import type { IonFabButton } from '@ionic/core/components/ion-fab-button';
	import { BROWSER } from 'esm-env';
	import { addIcons } from 'ionicons';
	import { close } from 'ionicons/icons/index.js';
	import { createEventDispatcher, onMount } from 'svelte';

	type FabButtonSizeType = 'small' | undefined;

	let component: IonFabButton;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let activated = false;
	export let closeIcon = close;
	export let color: ColorType = undefined;
	export let download: DownloadType = undefined;
	export let disabled = false;
	export let href: HrefType = undefined;
	export let mode: ModeType = undefined;
	export let rel: RelType = undefined;
	// export let routerAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let routerDirection: RouterDirectionType = undefined;
	export let show = false;
	export let size: FabButtonSizeType = undefined;
	export let target: TargetType = undefined;
	export let translucent = false;
	export let type: ButtonType = 'button';

	export let svelteKitPrefetch = false;

	if (BROWSER) {
		onMount(async () => {
			const IonFabButton = (await import('@ionic/core/components/ion-fab-button')).IonFabButton;
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-fab-button', IonFabButton);
			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);

			if (closeIcon === 'close') {
				addIcons({
					close: close
				});
			}

			if (component && href && svelteKitPrefetch) {
				addSvelteKitPrefetchAttribute(component);
			}
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = () => {
		const eventDetail = true;

		dispatch('ionBlur', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('ionFocus', eventDetail);
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-fab-button
	activated="{activated}"
	close-icon="{closeIcon}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	download="{download}"
	href="{href}"
	mode="{mode}"
	rel="{rel}"
	router-direction="{routerDirection}"
	show="{show}"
	size="{size}"
	target="{target}"
	translucent="{translucent}"
	type="{type}"
	bind:this="{component}"
	on:click
	on:ionBlur="{onIonBlur}"
	on:ionFocus="{onIonFocus}"
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</ion-fab-button>

<style>
</style>
