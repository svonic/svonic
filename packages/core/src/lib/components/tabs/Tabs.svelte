<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { TabsCustomEvent } from '@ionic/core/components';
	import type { IonTabs } from '@ionic/core/components/ion-tabs';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonTabs;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export const getSelected = async () => {
		if (BROWSER && component) {
			return await component.getSelected();
		}
	};

	export const getTab = async (tab: string) => {
		if (BROWSER && component) {
			return await component.getTab(tab);
		}
	};

	export const select = async (tab: string) => {
		if (BROWSER && component) {
			return await component.select(tab);
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonTabs = (await import('@ionic/core/components/ion-tabs')).IonTabs;

			defineCustomElement('ion-tabs', IonTabs);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonTabsDidChange = (event: TabsCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionTabsDidChange', eventDetail);
	};

	const onIonTabsWillChange = (event: TabsCustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionTabsWillChange', eventDetail);
	};
</script>

<ion-tabs
	class="{cssClass}"
	bind:this="{component}"
	on:ionTabsDidChange="{onIonTabsDidChange}"
	on:ionTabsWillChange="{onIonTabsWillChange}"
>
	<slot
		name="top"
		slot="top"
	/>
	<slot />
	<slot
		name="bottom"
		slot="bottom"
	/>
</ion-tabs>

<style>
</style>
