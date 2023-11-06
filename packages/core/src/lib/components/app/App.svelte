<script lang="ts">
	import type { CssClassType, ApplicationConfig } from '$lib/types';
	import { initializeIonic } from '$lib/utils/ionic-svelte';
	import { defineCustomElement, updateCurrentCssClass } from '$lib/utils/utils';
	import type { IonApp } from '@ionic/core/components/ion-app';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let component: IonApp;
	let cssClass: CssClassType = '';
	let currentCssClass: CssClassType = '';
	let initialized = false;
	let previousCssClass: CssClassType = cssClass;

	export { cssClass as class };

	export let config: ApplicationConfig = {};
	export let id: string = '';

	if (BROWSER) {
		onMount(async () => {
			const IonApp = (await import('@ionic/core/components/ion-app')).IonApp;

			defineCustomElement('ion-app', IonApp);

			await initializeIonic(config).then(() => {
				initialized = true;
				// setTimeout(() => {
				// 	document.documentElement.classList.add('hydrated');
				// }, 400);
			});
		});
	}

	const onCssClassChange = (newCssClass: CssClassType) => {
		currentCssClass = updateCurrentCssClass(component?.classList, newCssClass, previousCssClass);
		previousCssClass = newCssClass;
	};

	$: onCssClassChange(cssClass);
</script>

{#if initialized}
	<ion-app
		class="{currentCssClass}"
		id="{id}"
		bind:this="{component}"
	>
		<slot />
	</ion-app>
{:else}
	<ion-app
		class="{currentCssClass}"
		id="{id}"
		bind:this="{component}"
	>
		<slot />
	</ion-app>
{/if}

<style>
</style>
