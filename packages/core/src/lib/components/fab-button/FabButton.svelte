<script lang="ts">
	import { browser } from '$app/environment';
	import type { ButtonType } from '$lib/types/button.type';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { DownloadType } from '$lib/types/download.type';
	import type { HrefType } from '$lib/types/href.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { RelType } from '$lib/types/rel.type';
	import type { RouterDirectionType } from '$lib/types/router-direction.type';
	import type { TargetType } from '$lib/types/target.type';
	import { addSvelteKitPrefetchAttribute, defineCustomElement } from '$lib/utils/utils';
	import type { IonFabButton } from '@ionic/core/components/ion-fab-button';
	import { addIcons } from 'ionicons';
	import { close } from 'ionicons/icons/index.js';
	import { createEventDispatcher, onMount } from 'svelte';

	type FabButtonSizeType = 'small' | undefined;

	let component: IonFabButton;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let activated = false;
	export let closeIcon = 'close';
	export let color: ColorType = undefined;
	export let disabled = false;
	export let download: DownloadType = undefined;
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

	if (browser) {
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

		dispatch('svo:blur', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('svo:focus', eventDetail);
	};
</script>

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
>
	<slot />
</ion-fab-button>

<style>
</style>
