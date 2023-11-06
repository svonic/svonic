<script lang="ts">
	import type { CssClassType, SpinnerType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonicSafeString } from '@ionic/core';
	import type { IonInfiniteScrollContent } from '@ionic/core/components/ion-infinite-scroll-content';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonInfiniteScrollContent;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let loadingSpinner: SpinnerType = undefined;
	export let loadingText: IonicSafeString | string | undefined = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonInfiniteScrollContent = (
				await import('@ionic/core/components/ion-infinite-scroll-content')
			).IonInfiniteScrollContent;
			const IonSpinner = (await import('@ionic/core/components/ion-spinner')).IonSpinner;

			defineCustomElement('ion-infinite-scroll-content', IonInfiniteScrollContent);
			defineCustomElement('ion-spinner', IonSpinner);
		});
	}
</script>

<ion-infinite-scroll-content
	class="{cssClass}"
	loading-spinner="{loadingSpinner}"
	loading-text="{loadingText}"
	bind:this="{component}"
>
</ion-infinite-scroll-content>

<style>
</style>
