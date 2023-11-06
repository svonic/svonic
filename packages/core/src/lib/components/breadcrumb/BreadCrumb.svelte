<script lang="ts">
	import type { CssClassType, ColorType, DownloadType, HrefType, ModeType, RelType, RouterDirectionType, TargetType } from '$lib/types';
	import { addSvelteKitPrefetchAttribute, defineCustomElement } from '$lib/utils/utils';
	import type { IonBreadcrumb } from '@ionic/core/components/ion-breadcrumb';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonBreadcrumb;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let active = false;
	export let color: ColorType = undefined;
	export let disabled = false;
	export let download: DownloadType = undefined;
	export let href: HrefType = undefined;
	export let mode: ModeType = undefined;
	export let rel: RelType = undefined;
	// export let routerAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let routerDirection: RouterDirectionType = undefined;
	export let separator = false;
	export let target: TargetType = undefined;

	export let svelteKitPrefetch = false;

	if (BROWSER) {
		onMount(async () => {
			const IonBreadcrumb = (await import('@ionic/core/components/ion-breadcrumb')).IonBreadcrumb;
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;

			defineCustomElement('ion-breadcrumb', IonBreadcrumb);
			defineCustomElement('ion-icon', IonIcon);

			if (component && href && svelteKitPrefetch) {
				addSvelteKitPrefetchAttribute(component);
			}
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = () => {
		const eventDetail = true;

		dispatch('ionBlur', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('ionFocus', eventDetail);
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-breadcrumb
	active="{active}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	download="{download}"
	href="{href}"
	mode="{mode}"
	rel="{rel}"
	router-direction="{routerDirection}"
	separator="{separator}"
	target="{target}"
	bind:this="{component}"
	on:click
	on:ionBlur="{onIonBlur}"
	on:ionFocus="{onIonFocus}"
	on:keydown
	on:keypress
	on:keyup
>
	<slot
		name="start"
		slot="start"
	/>
	<slot />
	<slot
		name="separator"
		slot="separator"
	/>
	<slot
		name="end"
		slot="end"
	/>
</ion-breadcrumb>

<style>
</style>
