<script lang="ts">
	import { browser } from '$app/environment';
	import type { ButtonType } from '$lib/types/button.type';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { DownloadType } from '$lib/types/download.type';
	import type { HrefType } from '$lib/types/href.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { TargetType } from '$lib/types/target.type';
	import { addSvelteKitPrefetchAttribute, defineCustomElement } from '$lib/utils/utils';
	import type { IonItemOption } from '@ionic/core/components/ion-item-option';
	import { onMount } from 'svelte';

	let component: IonItemOption;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let disabled = false;
	export let download: DownloadType = undefined;
	export let expandable = false;
	export let href: HrefType = undefined;
	export let mode: ModeType = undefined;
	export let target: TargetType = undefined;
	export let type: ButtonType = 'button';

	export let svelteKitPrefetch = false;

	if (browser) {
		onMount(async () => {
			const IonItemOption = (await import('@ionic/core/components/ion-item-option')).IonItemOption;
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-item-option', IonItemOption);
			defineCustomElement('ion-ripple-effect', IonRippleEffect);

			if (component && href && svelteKitPrefetch) {
				addSvelteKitPrefetchAttribute(component);
			}
		});
	}
</script>

<ion-item-option
	class="{cssClass}"
	color="{color}"
	disabled="{disabled}"
	download="{download}"
	expandable="{expandable}"
	href="{href}"
	mode="{mode}"
	target="{target}"
	type="{type}"
	bind:this="{component}"
	on:click
	on:keydown
	on:keypress
	on:keyup
>
	<slot
		name="top"
		slot="top"
	/>
	<slot
		name="start"
		slot="start"
	/>
	<slot
		name="icon-only"
		slot="icon-only"
	/>
	<slot />
	<slot
		name="end"
		slot="end"
	/>
	<slot
		name="bottom"
		slot="bottom"
	/>
</ion-item-option>

<style>
</style>
