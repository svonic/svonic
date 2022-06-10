<script lang="ts">
	import { browser } from '$app/env';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import type { IonTabBar } from '@ionic/core/components/ion-tab-bar';
	import { onMount } from 'svelte';

	let component: IonTabBar;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;
	export let selectedTab: string | undefined = undefined;
	export let translucent = false;

	export let toSlot: 'bottom' | 'top' = undefined;

	if (browser) {
		onMount(async () => {
			const IonTabBar = (await import('@ionic/core/components/ion-tab-bar')).IonTabBar;

			defineCustomElement('ion-tab-bar', IonTabBar);

			addNamedSlot(component, toSlot);
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
