<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	type FabListSideType = 'bottom' | 'end' | 'start' | 'top';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let activated = false;
	export let side: FabListSideType = 'bottom';

	if (BROWSER) {
		onMount(async () => {
			const IonFabList = (await import('@ionic/core/components/ion-fab-list')).IonFabList;

			defineCustomElement('ion-fab-list', IonFabList);
		});
	}
</script>

<ion-fab-list
	activated="{activated}"
	class="{cssClass}"
	side="{side}"
>
	<slot />
</ion-fab-list>

<style>
</style>
