<script lang="ts">
	import { browser } from '$app/env';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { createEventDispatcher, onMount } from 'svelte';

	type WhenType = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | boolean | string;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let contentId: string | undefined = undefined;
	export let disabled = false;
	export let when: WhenType = 'lg';

	if (browser) {
		onMount(async () => {
			const IonSplitPane = (await import('@ionic/core/components/ion-split-pane')).IonSplitPane;

			defineCustomElement('ion-split-pane', IonSplitPane);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonSplitPaneVisible = (event: CustomEvent<{ visible: boolean }>) => {
		const eventDetail = event.detail;

		dispatch('svo:navigation-pane-visible', eventDetail);
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
