<script lang="ts">
  import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SlotType } from '$lib/types/slot.type';
	import type { ValueType } from '$lib/types/value.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { SegmentChangeEventDetail, SegmentCustomEvent } from '@ionic/core/components';
	import type { IonSegment } from '@ionic/core/components/ion-segment';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonSegment;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let disabled = false;
	export let mode: ModeType = undefined;
	export let scrollable = false;
	export let selectOnFocus = false;
	export let swipeGesture = true;
	export let value: ValueType = undefined;

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonSegment = (await import('@ionic/core/components/ion-segment')).IonSegment;

			defineCustomElement('ion-segment', IonSegment);

			addNamedSlot(component, toSlot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonChange = (event: SegmentCustomEvent) => {
		const eventDetail: SegmentChangeEventDetail = event.detail;

		const newValue = event.detail.value;

		if (value !== newValue) {
			value = newValue;
		}

		dispatch('svo:change', eventDetail);
	};
</script>

<ion-segment
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	mode="{mode}"
	scrollable="{scrollable}"
	select-on-focus="{selectOnFocus}"
	swipe-gesture="{swipeGesture}"
	value="{value}"
	bind:this="{component}"
	on:ionChange="{onIonChange}"
>
	<slot />
</ion-segment>

<style>
</style>
