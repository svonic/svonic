<script lang="ts">
	import type { CssClassType, ModeType, LineType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonList } from '@ionic/core/components/ion-list';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonList;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let inset = false;
	export let mode: ModeType = undefined;
	export let lines: LineType = undefined;

	export let slot: SlotType = undefined;

	export const closeSlidingItems = async () => {
		if (BROWSER && component) {
			return await component.closeSlidingItems();
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonList = (await import('@ionic/core/components/ion-list')).IonList;

			defineCustomElement('ion-list', IonList);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-list
	class="{cssClass}"
	inset="{inset}"
	lines="{lines}"
	mode="{mode}"
	bind:this="{component}"
>
	<slot />
</ion-list>

<style>
</style>
