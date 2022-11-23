<script lang="ts">
	import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonThumbnail } from '@ionic/core/components/ion-thumbnail';
	import { onMount } from 'svelte';

	let component: IonThumbnail;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonThumbnail = (await import('@ionic/core/components/ion-thumbnail')).IonThumbnail;

			defineCustomElement('ion-thumbnail', IonThumbnail);

			addNamedSlot(component, toSlot);
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
