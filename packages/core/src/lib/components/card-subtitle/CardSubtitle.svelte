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
			const IonCardSubtitle = (await import('@ionic/core/components/ion-card-subtitle'))
				.IonCardSubtitle;

			defineCustomElement('ion-card-subtitle', IonCardSubtitle);
		});
	}
</script>

<ion-card-subtitle
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
>
	<slot />
</ion-card-subtitle>

<style>
</style>
