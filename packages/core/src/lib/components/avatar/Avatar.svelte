<script lang="ts">
	import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonAvatar } from '@ionic/core/components/ion-avatar';
	import { onMount } from 'svelte';

	let component: IonAvatar;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonAvatar = (await import('@ionic/core/components/ion-avatar')).IonAvatar;

			defineCustomElement('ion-avatar', IonAvatar);

			addNamedSlot(component, toSlot);
		});
	}
</script>

<ion-avatar
	class="{cssClass}"
	bind:this="{component}"
>
	<slot />
</ion-avatar>

<style>
</style>
