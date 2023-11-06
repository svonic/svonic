<script lang="ts">
	import type { CssClassType, ColorType, ModeType, PositionType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonLabel } from '@ionic/core/components/ion-label';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonLabel;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;
	export let position: PositionType = undefined;

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonLabel = (await import('@ionic/core/components/ion-label')).IonLabel;

			defineCustomElement('ion-label', IonLabel);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-label
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
	position="{position}"
	bind:this="{component}"
>
	<slot />
</ion-label>

<style>
</style>
