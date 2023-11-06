<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let autoHide = true;
	export let menu: 'end' | 'start' | string | undefined = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonMenuToggle = (await import('@ionic/core/components/ion-menu-toggle')).IonMenuToggle;

			defineCustomElement('ion-menu-toggle', IonMenuToggle);
		});
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-menu-toggle
	auto-hide="{autoHide}"
	class="{cssClass}"
	menu="{menu}"
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	<slot />
</ion-menu-toggle>

<style>
</style>
