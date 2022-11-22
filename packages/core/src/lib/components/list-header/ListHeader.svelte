<script lang="ts">
  import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { LineType } from '$lib/types/line.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let lines: LineType = undefined;
	export let mode: ModeType = undefined;

	if (browser) {
		onMount(async () => {
			const IonListHeader = (await import('@ionic/core/components/ion-list-header')).IonListHeader;

			defineCustomElement('ion-list-header', IonListHeader);
		});
	}
</script>

<ion-list-header class="{cssClass}" color="{color}" lines="{lines}" mode="{mode}">
	<slot />
</ion-list-header>

<style>
</style>
