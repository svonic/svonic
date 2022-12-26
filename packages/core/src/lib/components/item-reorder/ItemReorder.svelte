<script lang="ts">
	import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonReorder } from '@ionic/core/components/ion-reorder';
	import { onMount } from 'svelte';

	let component: IonReorder;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let toSlot: 'end' | 'start' = undefined;

	if (browser) {
		onMount(async () => {
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonReorder = (await import('@ionic/core/components/ion-reorder')).IonReorder;

			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-reorder', IonReorder);

			addNamedSlot(component, toSlot);
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
