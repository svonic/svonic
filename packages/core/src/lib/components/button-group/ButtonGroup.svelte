<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonButtons } from '@ionic/core/components/ion-buttons';
	import { onMount } from 'svelte';

	let component: IonButtons;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let collapse = false;

	export let toSlot: 'buttons' | 'end' | 'primary' | 'secondary' | 'start' | undefined = undefined;

	if (browser) {
		onMount(async () => {
			const IonButtons = (await import('@ionic/core/components/ion-buttons')).IonButtons;

			defineCustomElement('ion-buttons', IonButtons);

			addNamedSlot(component, toSlot);
		});
	}
</script>

<ion-buttons class="{cssClass}" collapse="{collapse}" bind:this="{component}">
	<slot />
</ion-buttons>

<style>
</style>
