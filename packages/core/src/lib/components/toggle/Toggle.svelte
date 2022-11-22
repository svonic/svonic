<script lang="ts">
  import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { ToggleChangeEventDetail, ToggleCustomEvent } from '@ionic/core/components';
	import type { IonToggle } from '@ionic/core/components/ion-toggle';
	import { createEventDispatcher, onMount } from 'svelte';

	type ToggleValueType = 'on' | string | undefined;

	let component: IonToggle;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let checked = false;
	export let color: ColorType = undefined;
	export let disabled = false;
	export let mode: ModeType = undefined;
	export let name = '';
	export let value: ToggleValueType = 'on';

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonToggle = (await import('@ionic/core/components/ion-toggle')).IonToggle;

			defineCustomElement('ion-toggle', IonToggle);

			addNamedSlot(component, toSlot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:blur', eventDetail);
	};

	const onIonChange = (event: ToggleCustomEvent) => {
		const eventDetail: ToggleChangeEventDetail = event.detail;

		checked = eventDetail.checked;
		value = eventDetail.value;

		dispatch('svo:change', eventDetail);
	};

	const onIonFocus = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:focus', eventDetail);
	};
</script>

<ion-toggle
	checked="{checked}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	mode="{mode}"
	name="{name}"
	value="{value}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionChange="{onIonChange}"
	on:ionFocus="{onIonFocus}"
>
</ion-toggle>
