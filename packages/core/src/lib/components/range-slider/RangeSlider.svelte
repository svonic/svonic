<script lang="ts">
  import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { RangeChangeEventDetail } from '@ionic/core/components';
	import { createEventDispatcher, onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let debounce = 0;
	export let disabled = false;
	export let dualKnobs = false;
	export let max = 100;
	export let min = 0;
	export let mode: ModeType = undefined;
	export let name = '';
	export let pin = false;
	export let snaps = false;
	export let step = 1;
	export let ticks = true;
	export let value: number | { lower: number; upper: number } = 0;

	if (browser) {
		onMount(async () => {
			const IonRange = (await import('@ionic/core/components/ion-range')).IonRange;

			defineCustomElement('ion-range', IonRange);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:blur', eventDetail);
	};

	const onIonChange = (event: CustomEvent) => {
		const eventDetail: RangeChangeEventDetail = event.detail;

		dispatch('svo:change', eventDetail);
	};

	const onIonFocus = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:focus', eventDetail);
	};

	const onIonKnobMoveEnd = (event: CustomEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:knbo-move-end', eventDetail);
	};

	const ionKnobMoveStart = (event: CustomEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:knbo-move-start', eventDetail);
	};
</script>

<ion-range
	class="{cssClass}"
	color="{color}"
	debounce="{debounce}"
	disabled="{disabled}"
	dual-knobs="{dualKnobs}"
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
	<slot name="start" slot="start" />
	<slot name="end" slot="end" />
</ion-range>

<style>
</style>
