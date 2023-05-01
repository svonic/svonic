<script lang="ts">
	import { browser } from '$app/environment';
	import type { ButtonType } from '$lib/types/button.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { ValueType } from '$lib/types/value.type';
	import { defineCustomElement } from '$lib/utils/utils';
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
	export let value: ValueType = undefined;

	if (browser) {
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
