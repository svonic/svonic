<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonImg } from '@ionic/core/components/ion-img';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonImg;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let alt: string | undefined = undefined;
	export let src: string | undefined = undefined;

	export let toSlot: SlotType = undefined;

	if (browser) {
		onMount(async () => {
			const IonImg = (await import('@ionic/core/components/ion-img')).IonImg;

			defineCustomElement('ion-img', IonImg);

			addNamedSlot(component, toSlot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonError = () => {
		const eventDetail = true;

		dispatch('svo:error', eventDetail);
	};

	const onIonImgDidLoad = () => {
		const eventDetail = true;

		dispatch('svo:did-load', eventDetail);
	};

	const onIonImgWillLoad = () => {
		const eventDetail = true;

		dispatch('svo:will-load', eventDetail);
	};
</script>

<ion-img
	alt="{alt}"
	class="{cssClass}"
	src="{src}"
	on:ionError="{onIonError}"
	on:ionImgDidLoad="{onIonImgDidLoad}"
	on:ionImgWillLoad="{onIonImgWillLoad}"
>
	<slot />
</ion-img>

<style>
</style>
