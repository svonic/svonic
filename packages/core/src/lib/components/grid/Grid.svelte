<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let fixed = false;

	if (BROWSER) {
		onMount(async () => {
			const IonGrid = (await import('@ionic/core/components/ion-grid')).IonGrid;

			defineCustomElement('ion-grid', IonGrid);
		});
	}
</script>

<ion-grid
	class="{cssClass}"
	fixed="{fixed}"
>
	<slot />
</ion-grid>

<style>
</style>
