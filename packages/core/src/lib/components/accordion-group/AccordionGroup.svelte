<script lang="ts">
	import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { ValueType } from '$lib/types/value.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type {
		AccordionGroupChangeEventDetail,
		AccordionGroupCustomEvent
	} from '@ionic/core/components';
	import { createEventDispatcher, onMount } from 'svelte';

	type AccordionExpandType = 'compact' | 'inset' | undefined;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = false;
	export let expand: AccordionExpandType = 'compact';
	export let mode: ModeType = undefined;
	export let multiple: boolean | undefined = undefined;
	export let readonly = false;
	export let value: ValueType = undefined;

	if (browser) {
		onMount(async () => {
			const IonAccordionGroup = (await import('@ionic/core/components/ion-accordion-group'))
				.IonAccordionGroup;

			defineCustomElement('ion-accordion-group', IonAccordionGroup);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonChange = (event: AccordionGroupCustomEvent) => {
		const eventDetail: AccordionGroupChangeEventDetail = event.detail;

		dispatch('svo:change', eventDetail);
	};
</script>

<ion-accordion-group
	class="{cssClass}"
	disabled="{disabled}"
	expand="{expand}"
	mode="{mode}"
	multiple="{multiple}"
	readonly="{readonly}"
	value="{value}"
	on:ionChange="{onIonChange}"
>
	<slot />
</ion-accordion-group>

<style>
</style>
