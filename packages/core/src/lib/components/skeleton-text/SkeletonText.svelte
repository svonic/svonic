<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let animated = false;

	export let height = '100%';
	export let width = '100%';

	if (BROWSER) {
		onMount(async () => {
			const IonSkeletonText = (await import('@ionic/core/components/ion-skeleton-text'))
				.IonSkeletonText;

			defineCustomElement('ion-skeleton-text', IonSkeletonText);
		});
	}
</script>

<ion-skeleton-text
	animated="{animated}"
	class="{cssClass}"
	style="height: {height}; width: {width}"
>
</ion-skeleton-text>

<style>
</style>
