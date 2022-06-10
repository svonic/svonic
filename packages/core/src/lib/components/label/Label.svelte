<script lang="ts">
	import { browser } from '$app/env';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { PositionType } from '$lib/types/position.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonLabel } from '@ionic/core/components/ion-label';
	import { onMount } from 'svelte';

	let component: IonLabel;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;
	export let position: PositionType = undefined;

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonLabel = (await import('@ionic/core/components/ion-label')).IonLabel;

			defineCustomElement('ion-label', IonLabel);

			addNamedSlot(component, toSlot);
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
