<script lang="ts">
	import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let mode: ModeType = undefined;

	if (browser) {
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
