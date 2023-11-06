<script lang="ts">
	import type { CssClassType, SpinnerType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonicSafeString } from '@ionic/core/components';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let pullingIcon: null | string | undefined = undefined;
	export let pullingText: IonicSafeString | string | undefined = undefined;
	export let refreshingSpinner: SpinnerType = undefined;
	export let refreshingText: IonicSafeString | string | undefined = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonRefresherContent = (await import('@ionic/core/components/ion-refresher-content'))
				.IonRefresherContent;
			const IonSpinner = (await import('@ionic/core/components/ion-spinner')).IonSpinner;

			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-refresher-content', IonRefresherContent);
			defineCustomElement('ion-spinner', IonSpinner);
		});
	}
</script>

<ion-refresher-content
	class="{cssClass}"
	pulling-icon="{pullingIcon}"
	pulling-text="{pullingText}"
	refreshing-spinner="{refreshingSpinner}"
	refreshing-text="{refreshingText}"
>
	<slot />
</ion-refresher-content>

<style>
</style>
