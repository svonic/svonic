<script lang="ts">
	import { browser } from '$app/env';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { LineType } from '$lib/types/line.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonList } from '@ionic/core/components/ion-list';
	import { onMount } from 'svelte';

	let component: IonList;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let inset = false;
	export let mode: ModeType = undefined;
	export let lines: LineType = undefined;

	export let toSlot: SlotType = undefined;

	export const closeSlidingItems = async () => {
		if (browser && component) {
			return await component.closeSlidingItems();
		}
	};

	if (browser) {
		onMount(async () => {
			const IonList = (await import('@ionic/core/components/ion-list')).IonList;

			defineCustomElement('ion-list', IonList);

			addNamedSlot(component, toSlot);
		});
	}
</script>

<ion-list class="{cssClass}" inset="{inset}" lines="{lines}" mode="{mode}" bind:this="{component}">
	<slot />
</ion-list>

<style>
</style>
