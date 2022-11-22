<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ValueType } from '$lib/types/value.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { RadioGroupChangeEventDetail, RadioGroupCustomEvent } from '@ionic/core/components';
	import { createEventDispatcher, onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let allowEmptySelection = false;
	export let name = '';
	export let value: ValueType = '';

	if (browser) {
		onMount(async () => {
			const IonRadioGroup = (await import('@ionic/core/components/ion-radio-group')).IonRadioGroup;

			defineCustomElement('ion-radio-group', IonRadioGroup);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonChange = (event: RadioGroupCustomEvent) => {
		const eventDetail: RadioGroupChangeEventDetail = event.detail;

		dispatch('svo:change', eventDetail);
	};
</script>

<ion-radio-group
	allow-empty-selection="{allowEmptySelection}"
	class="{cssClass}"
	name="{name}"
	value="{value}"
	on:ionChange="{onIonChange}"
>
	<slot />
</ion-radio-group>
