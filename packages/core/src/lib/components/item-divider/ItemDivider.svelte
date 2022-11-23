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
	export let sticky = false;

	if (browser) {
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
