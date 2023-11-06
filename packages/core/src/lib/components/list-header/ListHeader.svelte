<script lang="ts">
	import type { CssClassType, ColorType, LineType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let lines: LineType = undefined;
	export let mode: ModeType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonListHeader = (await import('@ionic/core/components/ion-list-header')).IonListHeader;

			defineCustomElement('ion-list-header', IonListHeader);
		});
	}
</script>

<ion-list-header
	class="{cssClass}"
	color="{color}"
	lines="{lines}"
	mode="{mode}"
>
	<slot />
</ion-list-header>

<style>
</style>
