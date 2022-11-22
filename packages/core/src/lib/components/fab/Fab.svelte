<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonFab } from '@ionic/core/components/ion-fab';
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

	export let toSlot: 'fixed' | undefined = undefined;

	export const close = async () => {
		if (browser && component) {
			await component.close();
		}
	};

	if (browser) {
		onMount(async () => {
			const IonFab = (await import('@ionic/core/components/ion-fab')).IonFab;

			defineCustomElement('ion-fab', IonFab);

			addNamedSlot(component, toSlot);
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
