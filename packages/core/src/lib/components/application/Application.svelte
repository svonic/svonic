<script lang="ts">
	import { browser } from '$app/environment';
	import type { ApplicationConfig } from '$lib/types/application-config.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { initializeIonic } from '$lib/utils/ionic-svelte';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonApp } from '@ionic/core/components/ion-app';
	import { onMount } from 'svelte';

	let component: IonApp;
	let cssClass: CssClassType = '';
	let currentCssClass: CssClassType = '';

	let initialized = false;

	export { cssClass as class };

	export let config: ApplicationConfig = {};
	export let id: string | undefined = undefined;

	if (browser) {
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

	$: onCssClassChange(cssClass);

	const onCssClassChange = (newCssClass: CssClassType) => {
		if (component?.classList && newCssClass) {
			currentCssClass = Array.from(component.classList)
				.filter((cssClass) => {
					return !cssClass.startsWith('s-') && cssClass !== newCssClass && cssClass !== ' ';
				})
				.join(' ');

			if (currentCssClass.length > 0) {
				currentCssClass = ' ' + currentCssClass;
			}

			// console.log('currentCssClass', currentCssClass);
			// console.log('cssClass', newCssClass);
			// console.log('class list', component?.classList);
		}
	};
</script>

{#if initialized}
	<ion-app
		class="{cssClass}{currentCssClass}"
		id="{id}"
		bind:this="{component}"
	>
		<slot />
	</ion-app>
{:else}
	<ion-app
		class="{cssClass}{currentCssClass}"
		id="{id}"
		bind:this="{component}"
	>
		<slot />
	</ion-app>
{/if}

<style>
</style>
