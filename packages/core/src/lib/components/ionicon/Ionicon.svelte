<script lang="ts">
	import type { CssClassType, ColorType, ModeType, SlotType } from '$lib/types';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import { BROWSER } from 'esm-env';
	import { addIcons } from 'ionicons';
	import type { IonIcon } from 'ionicons/components/ion-icon';
	import { onMount, tick } from 'svelte';

	let component: IonIcon;
	let componentIsReady = false;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let ariaLabel: string | undefined = undefined;
	export let ariaHidden: boolean = false;
	export let color: ColorType = undefined;
	export let flipRtl: boolean | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let ios: string | undefined = undefined;
	export let lazy = false;
	export let md: string | undefined = undefined;
	export let mode: ModeType = undefined;
	export let name: string | undefined = undefined;
	export let sanitize = true;
	export let size: 'large' | 'small' | undefined = undefined;
	export let src: string | undefined = undefined;

	export let iosIcon: string | undefined = undefined;
	export let mdIcon: string | undefined = undefined;

	export let slot: SlotType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;

			defineCustomElement('ion-icon', IonIcon);

			if (iosIcon && ios) {
				addIcons({
					[ios]: iosIcon
				});
			}

			if (mdIcon && md) {
				addIcons({
					[md]: mdIcon
				});
			}

			componentIsReady = true;

			await tick();

			addNamedSlot(component, slot);
		});
	}
</script>

{#if componentIsReady}
	<ion-icon
		aria-label="{ariaLabel}"
		aria-hidden="{ariaHidden}"
		class="{cssClass}"
		color="{color}"
		flip-rtl="{flipRtl}"
		ios="{ios}"
		icon="{icon}"
		lazy="{lazy}"
		md="{md}"
		mode="{mode}"
		name="{name}"
		sanitize="{sanitize}"
		size="{size}"
		src="{src}"
		bind:this="{component}"
		on:click
		on:keydown
		on:keypress
		on:keyup
	>
	</ion-icon>
{/if}

<style>
</style>
