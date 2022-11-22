<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let fixed = false;

	if (browser) {
		onMount(async () => {
			const IonGrid = (await import('@ionic/core/components/ion-grid')).IonGrid;

			defineCustomElement('ion-grid', IonGrid);
		});
	}
</script>

<ion-grid class="{cssClass}" fixed="{fixed}">
	<slot />
</ion-grid>

<style>
</style>
