<script lang="ts">
	import type { CssClassType, ColorType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let disabled = false;
	export let mode: ModeType = undefined;
	export let outline = false;

	if (BROWSER) {
		onMount(async () => {
			const IonChip = (await import('@ionic/core/components/ion-chip')).IonChip;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-chip', IonChip);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);
		});
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
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
