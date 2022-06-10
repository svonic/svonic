<script lang="ts">
	import { browser } from '$app/env';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ProgressSpinnerType } from '$lib/types/progress-spinner.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let duration: number | undefined = undefined;
	export let name: ProgressSpinnerType = undefined;
	export let paused = false;

	if (browser) {
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
	name="{name}"
	paused="{paused}"
>
</ion-spinner>

<style>
</style>
