<script lang="ts">
	import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	if (browser) {
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
