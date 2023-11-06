<script lang="ts">
	import type { CssClassType, ValueType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = false;
	export let value: ValueType = '';

	if (BROWSER) {
		onMount(async () => {
			const IonSelectOption = (await import('@ionic/core/components/ion-select-option'))
				.IonSelectOption;

			defineCustomElement('ion-select-option', IonSelectOption);
		});
	}
</script>

<ion-select-option
	class="{cssClass}"
	disabled="{disabled}"
	value="{value}"
>
	<slot />
</ion-select-option>

<style>
</style>
