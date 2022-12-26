<script lang="ts">
	import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonNote } from '@ionic/core/components/ion-note';
	import { onMount } from 'svelte';

	let component: IonNote;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonNote = (await import('@ionic/core/components/ion-note')).IonNote;

			defineCustomElement('ion-note', IonNote);

			addNamedSlot(component, toSlot);
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
