<script lang="ts">
	import type { CssClassType, AlignmentType, ColorType, LabelPlacementType, ModeType, SlotType } from '$lib/types';
	import type { JustifyType } from '$lib/types/justify.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { ToggleChangeEventDetail, ToggleCustomEvent } from '@ionic/core/components';
	import type { IonToggle } from '@ionic/core/components/ion-toggle';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	type ToggleValueType = 'on' | string | undefined;

	let component: IonToggle;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let alignment: AlignmentType = 'center';
	export let checked = false;
	export let color: ColorType = undefined;
	export let disabled = false;
	export let enableOnOffLabels: boolean | undefined = undefined;
	export let justify: JustifyType = 'space-between';
	export let labelPlacement: LabelPlacementType = 'start';
	export let mode: ModeType = undefined;
	export let name = '';
	export let value: ToggleValueType = 'on';

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonToggle = (await import('@ionic/core/components/ion-toggle')).IonToggle;

			defineCustomElement('ion-toggle', IonToggle);

			addNamedSlot(component, slot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('ionBlur', eventDetail);
	};

	const onIonChange = (event: ToggleCustomEvent) => {
		const eventDetail: ToggleChangeEventDetail = event.detail;

		checked = eventDetail.checked;
		value = eventDetail.value;

		dispatch('ionChange', eventDetail);
	};

	const onIonFocus = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('ionFocus', eventDetail);
	};
</script>

<ion-toggle
	alignment="{alignment}"
	checked="{checked}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	enable-on-off-labels="{enableOnOffLabels}"
	label-placement="{labelPlacement}"
	justify="{justify}"
	mode="{mode}"
	name="{name}"
	value="{value}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionChange="{onIonChange}"
	on:ionFocus="{onIonFocus}"
>
	<slot />
</ion-toggle>
