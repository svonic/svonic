<script lang="ts">
	import { browser } from '$app/env';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	type CollapseType = 'fade' | undefined;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let collapse: CollapseType = undefined;
	export let translucent = false;

	if (browser) {
		onMount(async () => {
			const IonFooter = (await import('@ionic/core/components/ion-footer')).IonFooter;

			defineCustomElement('ion-footer', IonFooter);
		});
	}
</script>

<ion-footer class="{cssClass}" collapse="{collapse}" translucent="{translucent}">
	<slot />
</ion-footer>

<style>
</style>
