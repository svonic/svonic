<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonButtons } from '@ionic/core/components/ion-buttons';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonButtons;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let collapse = false;

	export let slot: 'buttons' | 'end' | 'primary' | 'secondary' | 'start' | undefined = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonButtons = (await import('@ionic/core/components/ion-buttons')).IonButtons;

			defineCustomElement('ion-buttons', IonButtons);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-buttons
	class="{cssClass}"
	collapse="{collapse}"
	bind:this="{component}"
>
	<slot />
</ion-buttons>

<style>
</style>
