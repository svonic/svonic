<script lang="ts">
	import type { CssClassType, AlignmentType, ColorType, LabelPlacementType, ModeType, CheckBoxValueType, SlotType } from '$lib/types';
	import type { JustifyType } from '$lib/types/justify.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { CheckboxChangeEventDetail, CheckboxCustomEvent } from '@ionic/core/components';
	import type { IonCheckbox } from '@ionic/core/components/ion-checkbox';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonCheckbox;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let alignment: AlignmentType = 'center';
	export let checked = false;
	export let color: ColorType = undefined;
	export let disabled = false;
	export let indeterminate = false;
	export let justify: JustifyType = 'space-between';
	export let labelPlacement: LabelPlacementType = 'start';
	export let mode: ModeType = undefined;
	export let name = '';
	export let value: CheckBoxValueType = 'on';

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonCheckbox = (await import('@ionic/core/components/ion-checkbox')).IonCheckbox;

			defineCustomElement('ion-checkbox', IonCheckbox);

			addNamedSlot(component, slot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = () => {
		const eventDetail = true;

		dispatch('ionBlur', eventDetail);
	};

	const onIonChange = (event: CheckboxCustomEvent) => {
		const eventDetail: CheckboxChangeEventDetail = event.detail;

		checked = eventDetail.checked;

		dispatch('ionChange', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('ionFocus', eventDetail);
	};
</script>

<ion-checkbox
	alignment="{alignment}"
	checked="{checked}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	indeterminate="{indeterminate}"
	justify="{justify}"
	labelPlacement="{labelPlacement}"
	mode="{mode}"
	name="{name}"
	value="{value}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionChange="{onIonChange}"
	on:ionFocus="{onIonFocus}"
>
	<slot />
</ion-checkbox>
