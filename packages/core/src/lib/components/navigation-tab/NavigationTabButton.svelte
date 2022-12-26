<script lang="ts">
	import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { DownloadType } from '$lib/types/download.type';
	import type { HrefType } from '$lib/types/href.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { TargetType } from '$lib/types/target.type';
	import { addSvelteKitPrefetchAttribute, defineCustomElement } from '$lib/utils/utils';
	import type { IonTabButton } from '@ionic/core/components/ion-tab-button';
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
	export let selected = false;
	export let tabId: string;
	export let target: TargetType = undefined;

	export let svelteKitPrefetch = false;

	if (browser) {
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

<ion-tab-button
	class="{cssClass}"
	disabled="{disabled}"
	download="{download}"
	href="{href}"
	layout="{layout}"
	mode="{mode}"
	selected="{selected}"
	tab="{tabId}"
	target="{target}"
	bind:this="{component}"
	on:click
>
	<slot />
</ion-tab-button>

<style>
</style>
