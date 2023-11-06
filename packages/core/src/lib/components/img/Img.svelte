<script lang="ts">
	import type { CssClassType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonImg } from '@ionic/core/components/ion-img';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonImg;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let alt: string | undefined = undefined;
	export let src: string | undefined = undefined;

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonImg = (await import('@ionic/core/components/ion-img')).IonImg;

			defineCustomElement('ion-img', IonImg);

			addNamedSlot(component, slot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonError = () => {
		const eventDetail = true;

		dispatch('ionError', eventDetail);
	};

	const onIonImgDidLoad = () => {
		const eventDetail = true;

		dispatch('ionImgDidLoad', eventDetail);
	};

	const onIonImgWillLoad = () => {
		const eventDetail = true;

		dispatch('ionImgWillLoad', eventDetail);
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
