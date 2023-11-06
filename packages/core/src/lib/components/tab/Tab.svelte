<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonTab } from '@ionic/core/components/ion-tab';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonTab;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let tabId: string;

	export const setActive = async () => {
		if (BROWSER && component) {
			return await component.setActive();
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonTab = (await import('@ionic/core/components/ion-tab')).IonTab;

			defineCustomElement('ion-tab', IonTab);
		});
	}
</script>

<ion-tab
	class="{cssClass}"
	tab="{tabId}"
	bind:this="{component}"
>
	<slot />
</ion-tab>

<style>
</style>
