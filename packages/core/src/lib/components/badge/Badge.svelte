<script lang="ts">
	import type { CssClassType, ColorType, ModeType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonBadge } from '@ionic/core/components/ion-badge';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonBadge;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = 'primary';
	export let mode: ModeType = undefined;

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonBadge = (await import('@ionic/core/components/ion-badge')).IonBadge;

			defineCustomElement('ion-badge', IonBadge);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-badge
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
	bind:this="{component}"
>
	<slot />
</ion-badge>

<style>
</style>
