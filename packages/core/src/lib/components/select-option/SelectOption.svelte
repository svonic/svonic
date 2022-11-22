<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ValueType } from '$lib/types/value.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = false;
	export let value: ValueType = '';

	if (browser) {
		onMount(async () => {
			const IonSelectOption = (await import('@ionic/core/components/ion-select-option'))
				.IonSelectOption;

			defineCustomElement('ion-select-option', IonSelectOption);
		});
	}
</script>

<ion-select-option class="{cssClass}" disabled="{disabled}" value="{value}">
	<slot />
</ion-select-option>

<style>
</style>
