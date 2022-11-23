<script lang="ts">
	import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;

	if (browser) {
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
