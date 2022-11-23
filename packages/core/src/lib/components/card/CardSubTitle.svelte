<script lang="ts">
	import { browser } from '$app/environment';
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
