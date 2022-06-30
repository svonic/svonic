<script lang="ts">
	import { browser } from '$app/env';
	import type { ApplicationConfig } from '$lib/types/application-config.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { initializeIonic } from '$lib/utils/ionic-svelte';
	import { initialize } from '$lib/utils/global';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonApp } from '@ionic/core/components/ion-app';
	import { hydrateDocument } from '@ionic/core/hydrate';
	import { onMount } from 'svelte';

	let component: IonApp;
	let cssClass: CssClassType = '';
	let currentCssClass: CssClassType = '';

	let initialized = false;

	export { cssClass as class };

	export let config: ApplicationConfig = {
		mode: 'md'
	};
	export let id: string | undefined = undefined;

	initialize(config);

	if (browser) {
		onMount(async () => {
			const IonApp = (await import('@ionic/core/components/ion-app')).IonApp;

			defineCustomElement('ion-app', IonApp);

			// console.log('mounted document', document);

			// await hydrateDocument(document, {
			// 	clientHydrateAnnotations: false,
			// 	excludeComponents: [
			// 		// overlays
			// 		'ion-action-sheet',
			// 		'ion-alert',
			// 		'ion-loading',
			// 		'ion-modal',
			// 		'ion-picker',
			// 		'ion-popover',
			// 		'ion-toast',
			// 		'ion-toast',

			// 		// navigation
			// 		'ion-router',
			// 		'ion-route',
			// 		'ion-route-redirect',
			// 		'ion-router-link',
			// 		'ion-router-outlet',

			// 		// tabs
			// 		'ion-tabs',
			// 		'ion-tab',

			// 		// auxiliar
			// 		'ion-picker-column',
			// 		'ion-virtual-scroll'
			// 	]
			// }).then((hydrateResults) => {
			// 	hydrateResults.diagnostics.forEach((d) => {
			// 		if (d.type === 'error') {
			// 			console.error(d.messageText);
			// 		} else if (d.type === 'debug') {
			// 			console.debug(d.messageText);
			// 		} else {
			// 			console.log(d.messageText);
			// 		}
			// 	});
			// });

			console.log('ionic window', window.Ionic);

			// await initializeIonic(config).then(() => {
			// 	initialized = true;
			// 	// setTimeout(() => {
			// 	// 	document.documentElement.classList.add('hydrated');
			// 	// }, 400);
			// 	console.log('mounted initialized', initialized);
			// 	console.log('ionic window', window.Ionic);
			// });
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

<!-- {#if initialized}
	<ion-app class="{cssClass}{currentCssClass}" id="{id}" bind:this="{component}">
		<slot />
	</ion-app>
{:else}
	<ion-app class="{cssClass}{currentCssClass}" id="{id}" bind:this="{component}">
		<slot />
	</ion-app>
{/if} -->

<ion-app class="{cssClass}{currentCssClass}" id="{id}" bind:this="{component}">
	<slot />
</ion-app>

<style>
</style>
