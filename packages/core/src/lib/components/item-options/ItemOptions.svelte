<script lang="ts">
	import type { CssClassType, SideType } from '$lib/types';
	import { componentOnReady, defineCustomElement } from '$lib/utils/utils';
	import type { IonItemOptions } from '@ionic/core/components/ion-item-options';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount, tick } from 'svelte';

	let component: IonItemOptions;
	let componentIsReady = false;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let side: SideType = 'end';

	if (BROWSER) {
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

		dispatch('ionSwipe', eventDetail);
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
