<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	if (BROWSER) {
		onMount(async () => {
			const IonRow = (await import('@ionic/core/components/ion-row')).IonRow;

			defineCustomElement('ion-row', IonRow);
		});
	}
</script>

<ion-row class="{cssClass}">
	<slot />
</ion-row>

<style>
</style>
