<script lang="ts">
	import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { SideType } from '$lib/types/side.type';
	import { componentOnReady, defineCustomElement } from '$lib/utils/utils';
	import type { IonItemOptions } from '@ionic/core/components/ion-item-options';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	let component: IonItemOptions;
	let componentIsReady = false;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let side: SideType = 'end';

	if (browser) {
		onMount(async () => {
			const IonItemOptions = (await import('@ionic/core/components/ion-item-options'))
				.IonItemOptions;

			defineCustomElement('ion-item-options', IonItemOptions);

			await new Promise((resolve) => componentOnReady(component, resolve));

			componentIsReady = true;

			await tick();
		});
	}

	const dispatch = createEventDispatcher();

	const onIonSwipe = () => {
		const eventDetail = true;

		dispatch('svo:swipe', eventDetail);
	};
</script>

{#if componentIsReady}
	<ion-item-options
		class="{cssClass}"
		side="{side}"
		bind:this="{component}"
		on:ionSwipe="{onIonSwipe}"
	>
		<slot />
	</ion-item-options>
{/if}

<style>
</style>
