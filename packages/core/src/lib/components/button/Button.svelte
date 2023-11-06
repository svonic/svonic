<script lang="ts">
	import type {
		CssClassType,
		ButtonType,
		ColorType,
		DownloadType,
		HrefType,
		ModeType,
		RelType,
		RouterDirectionType,
		ShapeType,
		TargetType,
		SlotType
	} from '$lib/types';
	import {
		addNamedSlot,
		addSvelteKitPrefetchAttribute,
		defineCustomElement
	} from '$lib/utils/utils';
	import type { IonButton } from '@ionic/core/components/ion-button';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	type ButtonFillType = 'clear' | 'default' | 'outline' | 'solid' | undefined;
	type ButtonSizeType = 'default' | 'large' | 'small';
	type ExpandType = 'block' | 'full' | undefined;

	let component: IonButton;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let buttonType: ButtonType = 'button';
	export let color: ColorType = undefined;
	export let disabled = false;
	export let download: DownloadType = undefined;
	export let expand: ExpandType = undefined;
	export let fill: ButtonFillType = undefined;
	export let href: HrefType = undefined;
	export let id: number | string | undefined = undefined;
	export let mode: ModeType = undefined;
	export let rel: RelType = undefined;
	// export let routerAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let routerDirection: RouterDirectionType = undefined;
	export let shape: ShapeType = undefined;
	export let size: ButtonSizeType = 'default';
	export let strong = false;
	export let target: TargetType = undefined;
	export let type: ButtonType = 'button';

	export let slot: SlotType = undefined;
	export let svelteKitPrefetch = false;

	if (BROWSER) {
		onMount(async () => {
			const IonButton = (await import('@ionic/core/components/ion-button')).IonButton;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-button', IonButton);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);

			addNamedSlot(component, slot);

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
<ion-button
	button-type="{buttonType}"
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	download="{download}"
	expand="{expand}"
	fill="{fill}"
	href="{href}"
	id="{id}"
	mode="{mode}"
	rel="{rel}"
	router-direction="{routerDirection}"
	shape="{shape}"
	size="{size}"
	strong="{strong}"
	target="{target}"
	type="{type}"
	bind:this="{component}"
	on:click
	on:ionBlur="{onIonBlur}"
	on:ionFocus="{onIonFocus}"
	on:keydown
	on:keypress
	on:keyup
>
	<slot
		name="icon-only"
		slot="icon-only"
	/>
	<slot
		name="start"
		slot="start"
	/>
	<slot />
	<slot
		name="end"
		slot="end"
	/>
</ion-button>

<style>
</style>
