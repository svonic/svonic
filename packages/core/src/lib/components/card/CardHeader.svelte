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
	export let translucent = false;

	if (browser) {
		onMount(async () => {
			const IonCardHeader = (await import('@ionic/core/components/ion-card-header')).IonCardHeader;

			defineCustomElement('ion-card-header', IonCardHeader);
		});
	}
</script>

<ion-card-header class="{cssClass}" color="{color}" mode="{mode}" translucent="{translucent}">
	<slot />
</ion-card-header>

<style>
</style>
