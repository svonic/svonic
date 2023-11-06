<script lang="ts">
	import type { CssClassType, ColorType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonToolbar = (await import('@ionic/core/components/ion-toolbar')).IonToolbar;

			defineCustomElement('ion-toolbar', IonToolbar);
		});
	}
</script>

<ion-toolbar
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
>
	<slot
		name="start"
		slot="start"
	/>
	<slot
		name="secondary"
		slot="secondary"
	/>
	<slot />
	<slot
		name="primary"
		slot="primary"
	/>
	<slot
		name="end"
		slot="end"
	/>
</ion-toolbar>

<style>
</style>
