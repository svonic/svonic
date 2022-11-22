<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { ItemReorderCustomEvent, ItemReorderEventDetail } from '@ionic/core/components';
	import type { IonReorderGroup } from '@ionic/core/components/ion-reorder-group';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonReorderGroup;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = true;

	export const complete = async (listOrReorder?: boolean | any[] | undefined) => {
		if (browser && component) {
			return await component.complete(listOrReorder);
		}
	};

	if (browser) {
		onMount(async () => {
			const IonReorderGroup = (await import('@ionic/core/components/ion-reorder-group'))
				.IonReorderGroup;

			defineCustomElement('ion-reorder-group', IonReorderGroup);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonItemReorder = (event: ItemReorderCustomEvent) => {
		const eventDetail: ItemReorderEventDetail = event.detail;

		dispatch('svo:item-reorder', eventDetail);
	};
</script>

<ion-reorder-group
	class="{cssClass}"
	disabled="{disabled}"
	bind:this="{component}"
	on:ionItemReorder="{onIonItemReorder}"
>
	<slot />
</ion-reorder-group>

<style>
</style>
