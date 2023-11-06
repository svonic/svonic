<script lang="ts">
	import type { CssClassType, ColorType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	type ProgressBarType = 'determinate' | 'indeterminate';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let buffer = 1;
	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;
	export let reversed = false;
	export let type: ProgressBarType = 'determinate';
	export let value = 0;

	if (BROWSER) {
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
	mode="{mode}"
	reversed="{reversed}"
	type="{type}"
	value="{value}"
>
</ion-progress-bar>

<style>
</style>
