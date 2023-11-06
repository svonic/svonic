<script lang="ts">
	import type { CssClassType, ColorType, DownloadType, HrefType, ModeType, RelType, RouterDirectionType, TargetType, ButtonType } from '$lib/types';
	import { addSvelteKitPrefetchAttribute, defineCustomElement } from '$lib/utils/utils';
	import type { IonCard } from '@ionic/core/components/ion-card';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonCard;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let button: boolean = false;
	export let color: ColorType = undefined;
	export let disabled = false;
	export let download: DownloadType = undefined;
	export let href: HrefType = undefined;
	export let id: string = '';
	export let mode: ModeType = undefined;
	export let rel: RelType = undefined;
	// export let routerAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let routerDirection: RouterDirectionType = undefined;
	export let target: TargetType = undefined;
	export let type: ButtonType | undefined = button ? 'button' : undefined;

	export let svelteKitPrefetch = false;

	if (BROWSER) {
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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-card
	button="{button}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	download="{download}"
	href="{href}"
	id="{id}"
	mode="{mode}"
	rel="{rel}"
	router-direction="{routerDirection}"
	target="{target}"
	type="{type}"
	bind:this="{component}"
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</ion-card>

<style>
</style>
