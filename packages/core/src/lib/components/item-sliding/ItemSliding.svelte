<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { Side } from '@ionic/core/components';
	import type { IonItemSliding } from '@ionic/core/components/ion-item-sliding';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	let component: IonItemSliding;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = false;

	export const close = async () => {
		if (BROWSER && component) {
			await component.close();
		}
	};

	export const closeOpened = async () => {
		if (BROWSER && component) {
			return await component.closeOpened();
		}
	};

	export const getOpenAmount = async () => {
		if (BROWSER && component) {
			return await component.getOpenAmount();
		}
	};

	export const getSlidingRatio = async () => {
		if (BROWSER && component) {
			return await component.getSlidingRatio();
		}
	};

	export const open = async (side: Side | undefined) => {
		if (BROWSER && component) {
			await component.open(side);
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonItemSliding = (await import('@ionic/core/components/ion-item-sliding'))
				.IonItemSliding;

			defineCustomElement('ion-item-sliding', IonItemSliding);

			await tick();
		});
	}

	const dispatch = createEventDispatcher();

	const onIonDrag = () => {
		const eventDetail = true;

		dispatch('ionDrag', eventDetail);
	};
</script>

<ion-item-sliding
	class="{cssClass}"
	disabled="{disabled}"
	bind:this="{component}"
	on:ionDrag="{onIonDrag}"
	{...$$restProps}
>
	<slot />
</ion-item-sliding>

<style>
</style>
