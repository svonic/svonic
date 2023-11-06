<script lang="ts">
	import type { CssClassType, ColorType, LabelPlacementType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { RangeChangeEventDetail } from '@ionic/core/components';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let activeBarStart: number | undefined = undefined;
	export let color: ColorType = undefined;
	export let debounce: number | undefined = undefined;
	export let disabled = false;
	export let dualKnobs = false;
	export let label: string | undefined = undefined;
	export let labelPlacement: LabelPlacementType = 'start';
	export let max = 100;
	export let min = 0;
	export let mode: ModeType = undefined;
	export let name = '';
	export let pin = false;
	export let snaps = false;
	export let step = 1;
	export let ticks = true;
	export let value: number | { lower: number; upper: number } = 0;

	if (BROWSER) {
		onMount(async () => {
			const IonRange = (await import('@ionic/core/components/ion-range')).IonRange;

			defineCustomElement('ion-range', IonRange);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('ionBlur', eventDetail);
	};

	const onIonChange = (event: CustomEvent) => {
		const eventDetail: RangeChangeEventDetail = event.detail;

		dispatch('ionChange', eventDetail);
	};

	const onIonFocus = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('ionFocus', eventDetail);
	};

	const onIonKnobMoveEnd = (event: CustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionKnobMoveEnd', eventDetail);
	};

	const ionKnobMoveStart = (event: CustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionKnobMoveStart', eventDetail);
	};
</script>

<ion-range
	active-bar-start="{activeBarStart}"
	class="{cssClass}"
	color="{color}"
	debounce="{debounce}"
	disabled="{disabled}"
	dual-knobs="{dualKnobs}"
	label="{label}"
	label-placement="{labelPlacement}"
	max="{max}"
	min="{min}"
	mode="{mode}"
	name="{name}"
	pin="{pin}"
	snaps="{snaps}"
	step="{step}"
	ticks="{ticks}"
	value="{value}"
	on:ionBlur="{onIonBlur}"
	on:ionChange="{onIonChange}"
	on:ionFocus="{onIonFocus}"
	on:ionKnobMoveEnd="{onIonKnobMoveEnd}"
	on:ionKnobMoveStart="{ionKnobMoveStart}"
>
	<slot
		name="label"
		slot="label"
	/>
	<slot
		name="start"
		slot="start"
	/>
	<slot
		name="end"
		slot="end"
	/>
</ion-range>

<style>
</style>
