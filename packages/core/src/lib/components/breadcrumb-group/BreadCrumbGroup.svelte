<script lang="ts">
	import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type {
		BreadcrumbCollapsedClickEventDetail,
		BreadcrumbCustomEvent
	} from '@ionic/core/components';
	import { createEventDispatcher, onMount } from 'svelte';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let itemsAfterCollapse: number | undefined = 1;
	export let itemsBeforeCollapse: number | undefined = 1;
	export let maxItems: number | undefined = undefined;
	export let mode: ModeType = undefined;

	if (browser) {
		onMount(async () => {
			const IonBreadcrumbs = (await import('@ionic/core/components/ion-breadcrumbs'))
				.IonBreadcrumbs;

			defineCustomElement('ion-breadcrumbs', IonBreadcrumbs);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonCollapsedClick = (event: BreadcrumbCustomEvent) => {
		const eventDetail: BreadcrumbCollapsedClickEventDetail = event.detail;

		dispatch('svo:collapsed-click', eventDetail);
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
