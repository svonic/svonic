<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	type WhenType = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | boolean | string;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let contentId: string | undefined = undefined;
	export let disabled = false;
	export let when: WhenType = 'lg';

	if (BROWSER) {
		onMount(async () => {
			const IonSplitPane = (await import('@ionic/core/components/ion-split-pane')).IonSplitPane;

			defineCustomElement('ion-split-pane', IonSplitPane);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonSplitPaneVisible = (event: CustomEvent<{ visible: boolean }>) => {
		const eventDetail = event.detail;

		dispatch('ionSplitPaneVisible', eventDetail);
	};
</script>

<ion-split-pane
	class="{cssClass}"
	content-id="{contentId}"
	disabled="{disabled}"
	when="{when}"
	on:ionSplitPaneVisible="{onIonSplitPaneVisible}"
>
	<slot />
</ion-split-pane>
