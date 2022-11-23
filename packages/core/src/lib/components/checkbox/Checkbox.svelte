<script lang="ts">
	import { browser } from '$app/environment';
	import type { CheckBoxValueType } from '$lib/types/checkbox-value.type';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { CheckboxChangeEventDetail, CheckboxCustomEvent } from '@ionic/core/components';
	import type { IonCheckbox } from '@ionic/core/components/ion-checkbox';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonCheckbox;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let checked = false;
	export let color: ColorType = undefined;
	export let disabled = false;
	export let id: string | undefined = undefined;
	export let indeterminate = false;
	export let mode: ModeType = undefined;
	export let name = '';
	export let value: CheckBoxValueType = 'on';

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonCheckbox = (await import('@ionic/core/components/ion-checkbox')).IonCheckbox;

			defineCustomElement('ion-checkbox', IonCheckbox);

			addNamedSlot(component, toSlot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = () => {
		const eventDetail = true;

		dispatch('svo:blur', eventDetail);
	};

	const onIonChange = (event: CheckboxCustomEvent) => {
		const eventDetail: CheckboxChangeEventDetail = event.detail;

		checked = eventDetail.checked;

		dispatch('svo:change', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('svo:focus', eventDetail);
	};
</script>

<ion-checkbox
	checked="{checked}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	id="{id}"
	indeterminate="{indeterminate}"
	mode="{mode}"
	name="{name}"
	value="{value}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionChange="{onIonChange}"
	on:ionFocus="{onIonFocus}"
>
</ion-checkbox>
