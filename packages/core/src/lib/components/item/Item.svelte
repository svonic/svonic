<script lang="ts">
	import { browser } from '$app/environment';
	import type { ButtonType } from '$lib/types/button.type';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { DownloadType } from '$lib/types/download.type';
	import type { FillType } from '$lib/types/fill.type';
	import type { HrefType } from '$lib/types/href.type';
	import type { LineType } from '$lib/types/line.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { RelType } from '$lib/types/rel.type';
	import type { RouterDirectionType } from '$lib/types/router-direction.type';
	import type { ShapeType } from '$lib/types/shape.type';
	import type { TargetType } from '$lib/types/target.type';
	import {
		addNamedSlot,
		addSvelteKitPrefetchAttribute,
		defineCustomElement
	} from '$lib/utils/utils';
	import type { IonItem } from '@ionic/core/components/ion-item';
	import { onMount } from 'svelte';

	let component: IonItem;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let button: boolean | undefined = undefined;
	export let color: ColorType = undefined;
	// export let counter = true;
	export let detail: boolean | undefined = undefined;
	export let detailIcon = 'chevronForward';
	export let disabled = false;
	export let download: DownloadType = undefined;
	export let fill: FillType = undefined;
	export let href: HrefType = undefined;
	export let id: string | undefined = undefined;
	export let lines: LineType = undefined;
	export let mode: ModeType = undefined;
	export let rel: RelType = undefined;
	// export let routerAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let routerDirection: RouterDirectionType = undefined;
	export let shape: ShapeType = undefined;
	export let target: TargetType = undefined;
	export let type: ButtonType = 'button';

	// Additional Item Props
	export let isInValid: boolean | undefined = undefined;
	export let isValid: boolean | undefined = undefined;
	export let svelteKitPrefetch = false;
	export let toSlot: 'end' | 'start' | undefined = undefined;

	if (browser) {
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

			addNamedSlot(component, toSlot);

			if (component && href && svelteKitPrefetch) {
				addSvelteKitPrefetchAttribute(component);
			}
		});
	}
</script>

<ion-item
	button="{button}"
	class="{cssClass}"
	class:ion-valid="{isValid}"
	class:ion-invalid="{isInValid}"
	color="{color}"
	detail="{detail}"
	detail-icon="{detailIcon}"
	disabled="{disabled}"
	download="{download}"
	fill="{fill}"
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
