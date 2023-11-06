<script lang="ts">
	import type { CssClassType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonThumbnail } from '@ionic/core/components/ion-thumbnail';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonThumbnail;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonThumbnail = (await import('@ionic/core/components/ion-thumbnail')).IonThumbnail;

			defineCustomElement('ion-thumbnail', IonThumbnail);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-thumbnail
	class="{cssClass}"
	bind:this="{component}"
>
	<slot />
</ion-thumbnail>

<style>
</style>
