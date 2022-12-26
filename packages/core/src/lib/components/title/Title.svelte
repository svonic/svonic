<script lang="ts">
	import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	type TitleSizeType = 'large' | 'small' | undefined;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let size: TitleSizeType = undefined;

	if (browser) {
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
