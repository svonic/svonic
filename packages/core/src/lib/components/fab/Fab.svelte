<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonFab } from '@ionic/core/components/ion-fab';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	type HorizontalAlignmentType = 'center' | 'end' | 'start' | undefined;
	type VerticalAlignmentType = 'bottom' | 'center' | 'top' | undefined;

	let component: IonFab;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let activated = false;
	export let edge = false;
	export let horizontal: HorizontalAlignmentType = undefined;
	export let vertical: VerticalAlignmentType = undefined;

	export let slot: 'fixed' | undefined = undefined;

	export const close = async () => {
		if (BROWSER && component) {
			await component.close();
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonFab = (await import('@ionic/core/components/ion-fab')).IonFab;

			defineCustomElement('ion-fab', IonFab);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-fab
	activated="{activated}"
	class="{cssClass}"
	edge="{edge}"
	horizontal="{horizontal}"
	vertical="{vertical}"
	bind:this="{component}"
>
	<slot />
</ion-fab>

<style>
</style>
