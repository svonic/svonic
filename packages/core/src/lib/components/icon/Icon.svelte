<script lang="ts">
  import { browser } from '$app/environment';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { SlotType } from '$lib/types/slot.type';
	import { addNamedSlot, defineCustomElement } from '$lib/utils/utils';
	import { addIcons } from 'ionicons';
	import type { IonIcon } from 'ionicons/components/ion-icon';
	import { onMount, tick } from 'svelte';

	let component: IonIcon;
	let componentIsReady = false;
	let cssClass: CssClassType = undefined;
	let name: string | undefined = undefined;
	let src: string | undefined = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let flipRtl: boolean | undefined = undefined;
	export let icon: string | undefined = undefined;
	export let lazy = false;
	export let mode: ModeType = undefined;
	export let path: string | undefined = undefined;
	export let sanitize = true;
	export let size: 'large' | 'small' | undefined = undefined;

	export let customIcon: string | undefined = undefined;
	export let customIconTitle: string | undefined = undefined;

	export let toSlot: SlotType = undefined;

	$: registerIcon(customIcon, customIconTitle);
	$: usePathIcon(path);

	if (browser) {
		onMount(async () => {
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;

			defineCustomElement('ion-icon', IonIcon);

			componentIsReady = true;

			await tick();

			addNamedSlot(component, toSlot);
		});
	}

	const makeIcon = (path: string, title: string): string => {
		const icon = `
		data:image/svg+xml;utf8,
		<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' stroke-width='0' viewBox='0 0 24 24'>
			<title>${title}</title>
			<path d='${path}'/>
		</svg>`;
		return icon;
	};

	const registerIcon = (customIcon: string, customIconTitle: string): void => {
		if (customIcon && customIconTitle) {
			const iconName: string = customIconTitle.trim().replace(/\s+/g, '-').toLowerCase();

			addIcons({
				[iconName]: makeIcon(customIcon, customIconTitle)
			});

			icon = makeIcon(customIcon, customIconTitle);
		}
	};

	const usePathIcon = (path: string): void => {
		if (path) {
			name = undefined;
			icon = undefined;
			src = makeIcon(path, '');
		}
	};
</script>

{#if componentIsReady}
	<ion-icon
		class="{cssClass}"
		color="{color}"
		flip-rtl="{flipRtl}"
		icon="{icon}"
		lazy="{lazy}"
		mode="{mode}"
		name="{name}"
		sanitize="{sanitize}"
		size="{size}"
		src="{src}"
		bind:this="{component}"
		on:click
	>
	</ion-icon>
{/if}

<style>
</style>
