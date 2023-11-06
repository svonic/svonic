<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonReorder } from '@ionic/core/components/ion-reorder';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonReorder;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let slot: 'end' | 'start' = 'end';

	if (BROWSER) {
		onMount(async () => {
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonReorder = (await import('@ionic/core/components/ion-reorder')).IonReorder;

			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-reorder', IonReorder);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-reorder
	class="{cssClass}"
	bind:this="{component}"
>
	<slot />
</ion-reorder>

<style>
</style>
