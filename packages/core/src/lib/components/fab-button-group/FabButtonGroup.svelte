<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	type FabButtonGroupSideType = 'bottom' | 'end' | 'start' | 'top';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let activated = false;
	export let side: FabButtonGroupSideType = 'bottom';

	if (browser) {
		onMount(async () => {
			const IonFabList = (await import('@ionic/core/components/ion-fab-list')).IonFabList;

			defineCustomElement('ion-fab-list', IonFabList);
		});
	}
</script>

<ion-fab-list activated="{activated}" class="{cssClass}" side="{side}">
	<slot />
</ion-fab-list>

<style>
</style>
