<script lang="ts">
	import type { CssClassType, ColorType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;
	export let translucent = false;

	if (BROWSER) {
		onMount(async () => {
			const IonCardHeader = (await import('@ionic/core/components/ion-card-header')).IonCardHeader;

			defineCustomElement('ion-card-header', IonCardHeader);
		});
	}
</script>

<ion-card-header
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
	translucent="{translucent}"
>
	<slot />
</ion-card-header>

<style>
</style>
