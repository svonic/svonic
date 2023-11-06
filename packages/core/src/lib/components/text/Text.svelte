<script lang="ts">
	import type { CssClassType, ColorType, ModeType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonText } from '@ionic/core/components/ion-text';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonText;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonText = (await import('@ionic/core/components/ion-text')).IonText;

			defineCustomElement('ion-text', IonText);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-text
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
	bind:this="{component}"
>
	<slot />
</ion-text>

<style>
</style>
