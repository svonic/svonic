<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { RefresherCustomEvent, RefresherEventDetail } from '@ionic/core/components';
	import type { IonRefresher } from '@ionic/core/components/ion-refresher';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonRefresher;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let closeDuration: string | undefined = '280ms';
	export let disabled = false;
	export let pullFactor: number | undefined = 1;
	export let pullMax: number | undefined = 120;
	export let pullMin: number | undefined = 60;
	export let snapbackDuration: string | undefined = '280ms';

	export let toSlot: 'fixed' | undefined = undefined;

	export const cancel = async () => {
		if (browser && component) {
			await component.cancel();
		}
	};

	export const complete = async () => {
		if (browser && component) {
			await component.complete();
		}
	};

	export const getProgress = async () => {
		if (browser && component) {
			return await component.getProgress();
		}
	};

	if (browser) {
		onMount(async () => {
			const IonRefresher = (await import('@ionic/core/components/ion-refresher')).IonRefresher;

			defineCustomElement('ion-refresher', IonRefresher);

			addNamedSlot(component, toSlot);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonPull = () => {
		const eventDetail = true;

		dispatch('svo:pull', eventDetail);
	};

	const onIonRefresh = (event: RefresherCustomEvent) => {
		const eventDetail: RefresherEventDetail = event.detail;

		dispatch('svo:refresh', eventDetail);
	};

	const onIonStart = () => {
		const eventDetail = true;

		dispatch('svo:start', eventDetail);
	};
</script>

<ion-refresher
	class="{cssClass}"
	close-duration="{closeDuration}"
	disabled="{disabled}"
	pull-factor="{pullFactor}"
	pull-max="{pullMax}"
	pull-min="{pullMin}"
	snapback-duration="{snapbackDuration}"
	bind:this="{component}"
	on:ionPull="{onIonPull}"
	on:ionRefresh="{onIonRefresh}"
	on:ionStart="{onIonStart}"
>
	<slot name="fixed" slot="fixed" />
</ion-refresher>

<style>
</style>
