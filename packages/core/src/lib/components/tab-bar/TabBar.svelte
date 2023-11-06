<script lang="ts">
	import type { CssClassType, ColorType, ModeType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonTabBar } from '@ionic/core/components/ion-tab-bar';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonTabBar;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;
	export let selectedTab: string | undefined = undefined;
	export let translucent = false;

	export let slot: 'bottom' | 'top' | undefined = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonTabBar = (await import('@ionic/core/components/ion-tab-bar')).IonTabBar;

			defineCustomElement('ion-tab-bar', IonTabBar);

			addNamedSlot(component, slot);
		});
	}
</script>

<ion-tab-bar
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
	selected-tab="{selectedTab}"
	translucent="{translucent}"
	bind:this="{component}"
>
	<slot />
</ion-tab-bar>

<style>
</style>
