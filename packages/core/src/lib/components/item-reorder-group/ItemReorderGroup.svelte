<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { ItemReorderCustomEvent, ItemReorderEventDetail } from '@ionic/core/components';
	import type { IonReorderGroup } from '@ionic/core/components/ion-reorder-group';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonReorderGroup;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = true;

	export const complete = async (listOrReorder?: boolean | any[] | undefined) => {
		if (BROWSER && component) {
			return await component.complete(listOrReorder);
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonReorderGroup = (await import('@ionic/core/components/ion-reorder-group'))
				.IonReorderGroup;

			defineCustomElement('ion-reorder-group', IonReorderGroup);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonItemReorder = (event: ItemReorderCustomEvent) => {
		const eventDetail: ItemReorderEventDetail = event.detail;

		dispatch('ionItemReorder', eventDetail);
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
