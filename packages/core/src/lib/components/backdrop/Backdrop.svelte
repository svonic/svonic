<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonBackdrop } from '@ionic/core/components/ion-backdrop';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonBackdrop;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let stopPropagation = false;
	export let tappable = true;
	export let visible = true;

	if (BROWSER) {
		onMount(async () => {
			const IonBackdrop = (await import('@ionic/core/components/ion-backdrop')).IonBackdrop;

			defineCustomElement('ion-backdrop', IonBackdrop);
		});
	}

	const dispatch = createEventDispatcher();

	const ionBackdropTap = (event: CustomEvent) => {
		const eventDetail = event.detail;

		dispatch('didDismiss', eventDetail);
	};
</script>

<ion-backdrop
	class="{cssClass}"
	stopPropagation="{stopPropagation}"
	tappable="{tappable}"
	visible="{visible}"
	bind:this="{component}"
	on:ionBackdropTap="{ionBackdropTap}"
>
</ion-backdrop>

<style>
</style>
