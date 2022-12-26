<script lang="ts">
	import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	type ProgressBarType = 'determinate' | 'indeterminate';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let buffer = 1;
	export let color: ColorType = undefined;
	export let reversed = false;
	export let type: ProgressBarType = 'determinate';
	export let value = 0;

	if (browser) {
		onMount(async () => {
			const IonProgressBar = (await import('@ionic/core/components/ion-progress-bar'))
				.IonProgressBar;

			defineCustomElement('ion-progress-bar', IonProgressBar);
		});
	}
</script>

<ion-progress-bar
	buffer="{buffer}"
	class="{cssClass}"
	color="{color}"
	reversed="{reversed}"
	type="{type}"
	value="{value}"
>
</ion-progress-bar>

<style>
</style>
