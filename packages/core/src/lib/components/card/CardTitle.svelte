<script lang="ts">
	import { browser } from '$app/env';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;

	if (browser) {
		onMount(async () => {
			const IonCardTitle = (await import('@ionic/core/components/ion-card-title')).IonCardTitle;

			defineCustomElement('ion-card-title', IonCardTitle);
		});
	}
</script>

<ion-card-title class="{cssClass}" color="{color}" mode="{mode}">
	<slot />
</ion-card-title>

<style>
</style>
