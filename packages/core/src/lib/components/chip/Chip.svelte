<script lang="ts">
  import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let disabled = false;
	export let mode: ModeType = undefined;
	export let outline = false;

	if (browser) {
		onMount(async () => {
			const IonChip = (await import('@ionic/core/components/ion-chip')).IonChip;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-chip', IonChip);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);
		});
	}
</script>

<ion-chip
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	mode="{mode}"
	outline="{outline}"
	on:click
>
	<slot />
</ion-chip>
