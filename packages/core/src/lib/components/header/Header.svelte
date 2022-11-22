<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	type CollapseType = 'condense' | 'fade' | undefined;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let collapse: CollapseType = undefined;
	export let mode: ModeType = undefined;
	export let translucent = false;

	if (browser) {
		onMount(async () => {
			const IonHeader = (await import('@ionic/core/components/ion-header')).IonHeader;

			defineCustomElement('ion-header', IonHeader);
		});
	}
</script>

<ion-header class="{cssClass}" collapse="{collapse}" mode="{mode}" translucent="{translucent}">
	<slot />
</ion-header>

<style>
</style>
