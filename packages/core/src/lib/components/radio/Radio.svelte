<script lang="ts">
	import type { CssClassType, AlignmentType, ColorType, LabelPlacementType, ModeType, ValueType, SlotType } from '$lib/types';
	import type { JustifyType } from '$lib/types/justify.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonRadio } from '@ionic/core/components/ion-radio';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonRadio;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let alignment: AlignmentType = 'center';
	export let color: ColorType = undefined;
	export let disabled = false;
	export let justify: JustifyType = 'space-between';
	export let labelPlacement: LabelPlacementType = 'start';
	export let mode: ModeType = undefined;
	export let name = '';
	export let value: ValueType = '';

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonRadio = (await import('@ionic/core/components/ion-radio')).IonRadio;

			defineCustomElement('ion-radio', IonRadio);

			addNamedSlot(component, slot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = () => {
		const eventDetail = true;

		dispatch('ionBlur', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('ionFocus', eventDetail);
	};
</script>

<ion-radio
	alignment="{alignment}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	justify="{justify}"
	labelPlacement="{labelPlacement}"
	mode="{mode}"
	name="{name}"
	value="{value}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionFocus="{onIonFocus}"
>
	<slot />
</ion-radio>
