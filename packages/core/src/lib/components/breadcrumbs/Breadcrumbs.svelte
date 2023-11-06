<script lang="ts">
	import type { CssClassType, ColorType, ModeType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type {
		BreadcrumbCollapsedClickEventDetail,
		BreadcrumbCustomEvent
	} from '@ionic/core/components';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let itemsAfterCollapse: number | undefined = 1;
	export let itemsBeforeCollapse: number | undefined = 1;
	export let maxItems: number | undefined = undefined;
	export let mode: ModeType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonBreadcrumbs = (await import('@ionic/core/components/ion-breadcrumbs'))
				.IonBreadcrumbs;

			defineCustomElement('ion-breadcrumbs', IonBreadcrumbs);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonCollapsedClick = (event: BreadcrumbCustomEvent) => {
		const eventDetail: BreadcrumbCollapsedClickEventDetail = event.detail;

		dispatch('ionCollapsedClick', eventDetail);
	};
</script>

<ion-breadcrumbs
	class="{cssClass}"
	color="{color}"
	items-after-collapse="{itemsAfterCollapse}"
	items-before-collapse="{itemsBeforeCollapse}"
	max-items="{maxItems}"
	mode="{mode}"
	on:ionCollapsedClick="{onIonCollapsedClick}"
>
	<slot />
</ion-breadcrumbs>

<style>
</style>
