<script lang="ts">
	import type { CssClassType, ColorType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonCardTitle = (await import('@ionic/core/components/ion-card-title')).IonCardTitle;

			defineCustomElement('ion-card-title', IonCardTitle);
		});
	}
</script>

<ion-card-title
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
>
	<slot />
</ion-card-title>

<style>
</style>
