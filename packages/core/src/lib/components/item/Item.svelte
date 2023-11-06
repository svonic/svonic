<script lang="ts">
	import type {
		ButtonType,
		ColorType,
		CssClassType,
		DownloadType,
		HrefType,
		LineType,
		ModeType,
		RelType,
		RouterDirectionType,
		ShapeType,
		TargetType
	} from '$lib/types';
	import {
		addNamedSlot,
		addSvelteKitPrefetchAttribute,
		defineCustomElement,
		updateCurrentCssClass
	} from '$lib/utils/utils';
	import type { IonItem } from '@ionic/core/components/ion-item';
	import { BROWSER } from 'esm-env';
	import { chevronForward } from 'ionicons/icons';
	import { onMount } from 'svelte';

	let component: IonItem;
	let cssClass: CssClassType = '';
	let currentCssClass: CssClassType = '';
	let previousCssClass: CssClassType = cssClass;

	export { cssClass as class };

	export let button: boolean | undefined = undefined;
	export let color: ColorType = undefined;
	export let detail: boolean | undefined = undefined;
	export let detailIcon = chevronForward;
	export let disabled = false;
	export let download: DownloadType = undefined;
	export let href: HrefType = undefined;
	export let id: string = '';
	export let lines: LineType = undefined;
	export let mode: ModeType = undefined;
	export let rel: RelType = undefined;
	// export let routerAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let routerDirection: RouterDirectionType = undefined;
	export let shape: ShapeType = undefined;
	export let target: TargetType = undefined;
	export let type: ButtonType = 'button';

	// Additional Item Props
	export let slot: 'end' | 'header' | 'start' | undefined = undefined;
	export let svelteKitPrefetch = false;

	if (BROWSER) {
		onMount(async () => {
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonItem = (await import('@ionic/core/components/ion-item')).IonItem;
			const IonNote = (await import('@ionic/core/components/ion-note')).IonNote;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-item', IonItem);
			defineCustomElement('ion-note', IonNote);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);

			addNamedSlot(component, slot);

			if (component && href && svelteKitPrefetch) {
				addSvelteKitPrefetchAttribute(component);
			}
		});
	}

	const onCssClassChange = (newCssClass: CssClassType) => {
		currentCssClass = updateCurrentCssClass(component?.classList, newCssClass, previousCssClass);
		previousCssClass = newCssClass;
	};

	$: onCssClassChange(cssClass);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<ion-item
	button="{button}"
	class="{currentCssClass}"
	color="{color}"
	detail="{detail}"
	detail-icon="{detailIcon}"
	disabled="{disabled}"
	download="{download}"
	href="{href}"
	id="{id}"
	lines="{lines}"
	mode="{mode}"
	rel="{rel}"
	router-direction="{routerDirection}"
	shape="{shape}"
	target="{target}"
	type="{type}"
	bind:this="{component}"
	on:click
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
		name="end"
		slot="end"
	/>
</ion-item>

<style>
</style>
