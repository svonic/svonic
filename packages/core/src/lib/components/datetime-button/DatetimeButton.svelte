<script lang="ts">
	import type { CssClassType, ColorType, ModeType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonDatetimeButton } from '@ionic/core/components/ion-datetime-button';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonDatetimeButton;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = 'primary';
	export let datetime: string | undefined = undefined;
	export let disabled = false;
	export let mode: ModeType = undefined;

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonDatetimeButton = (await import('@ionic/core/components/ion-datetime-button'))
				.IonDatetimeButton;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-datetime-button', IonDatetimeButton);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-datetime-button
	class="{cssClass}"
	color="{color}"
	datetime="{datetime}"
	disabled="{disabled}"
	mode="{mode}"
	bind:this="{component}"
>
	<slot
		name="date-target"
		slot="date-target"
	/>
	<slot
		name="time-target"
		slot="time-target"
	/>
</ion-datetime-button>

<style>
</style>
