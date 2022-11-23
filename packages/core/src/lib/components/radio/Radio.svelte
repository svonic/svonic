<script lang="ts">
	import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SlotType } from '$lib/types/slot.type';
	import type { ValueType } from '$lib/types/value.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonRadio } from '@ionic/core/components/ion-radio';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonRadio;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let disabled = false;
	export let mode: ModeType = undefined;
	export let name = '';
	export let value: ValueType = '';

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonRadio = (await import('@ionic/core/components/ion-radio')).IonRadio;

			defineCustomElement('ion-radio', IonRadio);

			addNamedSlot(component, toSlot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = () => {
		const eventDetail = true;

		dispatch('svo:blur', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('svo:focus', eventDetail);
	};
</script>

<ion-radio
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	mode="{mode}"
	name="{name}"
	value="{value}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionFocus="{onIonFocus}"
>
</ion-radio>
