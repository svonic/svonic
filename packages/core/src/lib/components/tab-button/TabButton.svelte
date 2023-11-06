<script lang="ts">
	import type { CssClassType, DownloadType, HrefType, ModeType, RelType, TargetType } from '$lib/types';
	import { addSvelteKitPrefetchAttribute, defineCustomElement } from '$lib/utils/utils';
	import type { IonTabButton } from '@ionic/core/components/ion-tab-button';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	type LayoutType =
		| 'icon-bottom'
		| 'icon-end'
		| 'icon-hide'
		| 'icon-start'
		| 'icon-top'
		| 'label-hide'
		| undefined;

	let component: IonTabButton;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = false;
	export let download: DownloadType = undefined;
	export let href: HrefType = undefined;
	export let layout: LayoutType = 'icon-top';
	export let mode: ModeType = undefined;
	export let rel: RelType = undefined;
	export let selected = false;
	export let tab: string;
	export let target: TargetType = undefined;

	export let svelteKitPrefetch = false;

	if (BROWSER) {
		onMount(async () => {
			const IonTabButton = (await import('@ionic/core/components/ion-tab-button')).IonTabButton;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-tab-button', IonTabButton);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);

			if (component && href && svelteKitPrefetch) {
				addSvelteKitPrefetchAttribute(component);
			}
		});
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-tab-button
	class="{cssClass}"
	disabled="{disabled}"
	download="{download}"
	href="{href}"
	layout="{layout}"
	mode="{mode}"
	rel="{rel}"
	selected="{selected}"
	tab="{tab}"
	target="{target}"
	bind:this="{component}"
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</ion-tab-button>

<style>
</style>
