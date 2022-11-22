<script lang="ts">
  import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonBadge } from '@ionic/core/components/ion-badge';
	import { onMount } from 'svelte';

	let component: IonBadge;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = 'primary';
	export let mode: ModeType = undefined;

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonBadge = (await import('@ionic/core/components/ion-badge')).IonBadge;

			defineCustomElement('ion-badge', IonBadge);

			addNamedSlot(component, toSlot);
		});
	}
</script>

<ion-badge class="{cssClass}" color="{color}" mode="{mode}" bind:this="{component}">
	<slot />
</ion-badge>

<style>
</style>
