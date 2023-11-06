<script lang="ts">
	import type { CssClassType, ColorType, ModeType, ValueType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { SegmentChangeEventDetail, SegmentCustomEvent } from '@ionic/core/components';
	import type { IonSegment } from '@ionic/core/components/ion-segment';
	import { BROWSER } from 'esm-env';
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

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonSegment = (await import('@ionic/core/components/ion-segment')).IonSegment;

			defineCustomElement('ion-segment', IonSegment);

			addNamedSlot(component, slot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonChange = (event: SegmentCustomEvent) => {
		const eventDetail: SegmentChangeEventDetail = event.detail;

		const newValue = event.detail.value;

		if (value !== newValue) {
			value = newValue;
		}

		dispatch('ionChange', eventDetail);
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
