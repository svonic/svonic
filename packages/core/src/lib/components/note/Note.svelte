<script lang="ts">
	import type { CssClassType, ColorType, ModeType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonNote } from '@ionic/core/components/ion-note';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonNote;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonNote = (await import('@ionic/core/components/ion-note')).IonNote;

			defineCustomElement('ion-note', IonNote);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-note
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
	bind:this="{component}"
>
	<slot />
</ion-note>

<style>
</style>
