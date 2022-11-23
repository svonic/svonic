<script lang="ts">
	import { browser } from '$app/environment';
	import type { ButtonType } from '$lib/types/button.type';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { HrefType } from '$lib/types/href.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { RouterDirectionType } from '$lib/types/router-direction.type';
	import type { TargetType } from '$lib/types/target.type';
	import { addSvelteKitPrefetchAttribute, defineCustomElement } from '$lib/utils/utils';
	import type { IonCard } from '@ionic/core/components/ion-card';
	import { onMount } from 'svelte';

	let component: IonCard;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let button: boolean | undefined = undefined;
	export let color: ColorType = undefined;
	export let disabled = false;
	export let href: HrefType = undefined;
	export let id: string | undefined = undefined;
	export let mode: ModeType = undefined;
	// export let routerAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let routerDirection: RouterDirectionType = undefined;
	export let target: TargetType = undefined;
	export let type: ButtonType = undefined;

	export let svelteKitPrefetch = false;

	if (browser) {
		onMount(async () => {
			const IonCard = (await import('@ionic/core/components/ion-card')).IonCard;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-card', IonCard);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);

			if (component && href && svelteKitPrefetch) {
				addSvelteKitPrefetchAttribute(component);
			}
		});
	}
</script>

<ion-card
	button="{button}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	href="{href}"
	id="{id}"
	mode="{mode}"
	router-direction="{routerDirection}"
	target="{target}"
	type="{type}"
	bind:this="{component}"
	on:click
>
	<slot />
</ion-card>

<style>
</style>
