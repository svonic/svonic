<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonInfiniteScroll } from '@ionic/core/components/ion-infinite-scroll';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	type PositionType = 'bottom' | 'top';

	let component: IonInfiniteScroll;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let disabled = false;
	export let position: PositionType = 'bottom';
	export let threshold = '15%';

	export const complete = async () => {
		if (BROWSER && component) {
			await component.complete();
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonInfiniteScroll = (await import('@ionic/core/components/ion-infinite-scroll'))
				.IonInfiniteScroll;

			defineCustomElement('ion-infinite-scroll', IonInfiniteScroll);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonInfinite = () => {
		const eventDetail = true;

		dispatch('ionInfinite', eventDetail);
	};
</script>

<ion-infinite-scroll
	class="{cssClass}"
	disabled="{disabled}"
	position="{position}"
	threshold="{threshold}"
	bind:this="{component}"
	on:ionInfinite="{onIonInfinite}"
>
	<slot />
</ion-infinite-scroll>

<style>
</style>
