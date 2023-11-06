<script lang="ts">
	import type { CssClassType, ModeType, ButtonType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	type SegmentButtonLayoutType =
		| 'icon-bottom'
		| 'icon-end'
		| 'icon-hide'
		| 'icon-start'
		| 'icon-top'
		| 'label-hide';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = false;
	export let layout: SegmentButtonLayoutType = 'icon-top';
	export let mode: ModeType = undefined;
	export let type: ButtonType = 'button';
	export let value: number | string = '';

	if (BROWSER) {
		onMount(async () => {
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;
			const IonSegmentButton = (await import('@ionic/core/components/ion-segment-button'))
				.IonSegmentButton;

			defineCustomElement('ion-ripple-effect', IonRippleEffect);
			defineCustomElement('ion-segment-button', IonSegmentButton);
		});
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-segment-button
	class="{cssClass}"
	disabled="{disabled}"
	layout="{layout}"
	mode="{mode}"
	type="{type}"
	value="{value}"
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</ion-segment-button>

<style>
</style>
