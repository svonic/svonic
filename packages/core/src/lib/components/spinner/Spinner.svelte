<script lang="ts">
	import type { CssClassType, ColorType, SpinnerType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let duration: number | undefined = undefined;
	export let mode: ModeType = undefined;
	export let name: SpinnerType = undefined;
	export let paused = false;

	if (BROWSER) {
		onMount(async () => {
			const IonSpinner = (await import('@ionic/core/components/ion-spinner')).IonSpinner;

			defineCustomElement('ion-spinner', IonSpinner);
		});
	}
</script>

<ion-spinner
	class="{cssClass}"
	color="{color}"
	duration="{duration}"
	mode="{mode}"
	name="{name}"
	paused="{paused}"
>
</ion-spinner>

<style>
</style>
