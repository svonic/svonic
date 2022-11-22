<script lang="ts">
  import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonText } from '@ionic/core/components/ion-text';
	import { onMount } from 'svelte';

	let component: IonText;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonText = (await import('@ionic/core/components/ion-text')).IonText;

			defineCustomElement('ion-text', IonText);

			addNamedSlot(component, toSlot);
		});
	}
</script>

<ion-text class="{cssClass}" color="{color}" mode="{mode}" bind:this="{component}">
	<slot />
</ion-text>

<style>
</style>
