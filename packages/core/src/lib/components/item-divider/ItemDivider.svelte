<script lang="ts">
	import type { CssClassType, ColorType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let mode: ModeType = undefined;
	export let sticky = false;

	if (BROWSER) {
		onMount(async () => {
			const IonItemDivider = (await import('@ionic/core/components/ion-item-divider'))
				.IonItemDivider;

			defineCustomElement('ion-item-divider', IonItemDivider);
		});
	}
</script>

<ion-item-divider
	class="{cssClass}"
	color="{color}"
	mode="{mode}"
	sticky="{sticky}"
>
	<slot
		name="start"
		slot="start"
	/>
	<slot />
	<slot
		name="end"
		slot="end"
	/>
</ion-item-divider>

<style>
</style>
