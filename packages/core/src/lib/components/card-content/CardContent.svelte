<script lang="ts">
	import type { CssClassType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let mode: ModeType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonCardContent = (await import('@ionic/core/components/ion-card-content'))
				.IonCardContent;

			defineCustomElement('ion-card-content', IonCardContent);
		});
	}
</script>

<ion-card-content
	class="{cssClass}"
	mode="{mode}"
>
	<slot />
</ion-card-content>

<style>
</style>
