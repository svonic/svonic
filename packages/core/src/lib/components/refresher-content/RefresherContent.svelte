<script lang="ts">
  import { browser } from '$app/environment';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ProgressSpinnerType } from '$lib/types/progress-spinner.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonicSafeString } from '@ionic/core/components';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let pullingIcon: null | string | undefined = undefined;
	export let pullingText: IonicSafeString | string | undefined = undefined;
	export let refreshingSpinner: ProgressSpinnerType = undefined;
	export let refreshingText: IonicSafeString | string | undefined = undefined;

	if (browser) {
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
