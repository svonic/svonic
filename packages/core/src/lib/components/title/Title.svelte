<script lang="ts">
	import type { CssClassType, ColorType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	type TitleSizeType = 'large' | 'small' | undefined;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let size: TitleSizeType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonTitle = (await import('@ionic/core/components/ion-title')).IonTitle;

			defineCustomElement('ion-title', IonTitle);
		});
	}
</script>

<ion-title
	class="{cssClass}"
	color="{color}"
	size="{size}"
	on:ionChange
>
	<slot />
</ion-title>

<style>
</style>
