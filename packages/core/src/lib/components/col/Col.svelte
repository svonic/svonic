<script lang="ts">
	import { browser } from '$app/env';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import { onMount } from 'svelte';

	type ColSizeType = 'auto' | string | undefined;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let offset: string | undefined = undefined;
	export let offsetLg: string | undefined = undefined;
	export let offsetMd: string | undefined = undefined;
	export let offsetSm: string | undefined = undefined;
	export let offsetXl: string | undefined = undefined;
	export let offsetXs: string | undefined = undefined;
	export let pull: string | undefined = undefined;
	export let pullLg: string | undefined = undefined;
	export let pullMd: string | undefined = undefined;
	export let pullSm: string | undefined = undefined;
	export let pullXl: string | undefined = undefined;
	export let pullXs: string | undefined = undefined;
	export let push: string | undefined = undefined;
	export let pushLg: string | undefined = undefined;
	export let pushMd: string | undefined = undefined;
	export let pushSm: string | undefined = undefined;
	export let pushXl: string | undefined = undefined;
	export let pushXs: string | undefined = undefined;
	export let size: ColSizeType = undefined;
	export let sizeLg: ColSizeType = undefined;
	export let sizeMd: ColSizeType = undefined;
	export let sizeSm: ColSizeType = undefined;
	export let sizeXl: ColSizeType = undefined;
	export let sizeXs: ColSizeType = undefined;

	if (browser) {
		onMount(async () => {
			const IonCol = (await import('@ionic/core/components/ion-col')).IonCol;

			defineCustomElement('ion-col', IonCol);
		});
	}
</script>

<ion-col
	class="{cssClass}"
	offset="{offset}"
	offset-lg="{offsetLg}"
	offset-md="{offsetMd}"
	offset-sm="{offsetSm}"
	offset-xl="{offsetXl}"
	offset-xs="{offsetXs}"
	pull="{pull}"
	pull-lg="{pullLg}"
	pull-md="{pullMd}"
	pull-sm="{pullSm}"
	pull-xl="{pullXl}"
	pull-xs="{pullXs}"
	push="{push}"
	push-lg="{pushLg}"
	push-md="{pushMd}"
	push-sm="{pushSm}"
	push-xl="{pushXl}"
	push-xs="{pushXs}"
	size="{size}"
	size-lg="{sizeLg}"
	size-md="{sizeMd}"
	size-sm="{sizeSm}"
	size-xl="{sizeXl}"
	size-xs="{sizeXs}"
>
	<slot />
</ion-col>

<style>
</style>
