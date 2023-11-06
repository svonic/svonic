<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	if (BROWSER) {
		onMount(async () => {
			const IonItemGroup = (await import('@ionic/core/components/ion-item-group')).IonItemGroup;

			defineCustomElement('ion-item-group', IonItemGroup);
		});
	}
</script>

<ion-item-group class="{cssClass}">
	<slot />
</ion-item-group>

<style>
</style>
