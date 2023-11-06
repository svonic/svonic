<script lang="ts">
	import type { CssClassType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	type CollapseType = 'condense' | 'fade' | undefined;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let collapse: CollapseType = undefined;
	export let mode: ModeType = undefined;
	export let translucent = false;

	if (BROWSER) {
		onMount(async () => {
			const IonHeader = (await import('@ionic/core/components/ion-header')).IonHeader;

			defineCustomElement('ion-header', IonHeader);
		});
	}
</script>

<ion-header
	class="{cssClass}"
	collapse="{collapse}"
	mode="{mode}"
	translucent="{translucent}"
>
	<slot />
</ion-header>

<style>
</style>
