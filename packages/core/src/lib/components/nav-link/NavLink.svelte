<script lang="ts">
	import type { CssClassType, RouterDirectionType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { ViewController } from '@ionic/core';
	import type { IonNavLink } from '@ionic/core/components/ion-nav-link';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	let cssClass: CssClassType = undefined;
	let navLinkComponent: IonNavLink;

	export { cssClass as class };

	export let component: Function | HTMLElement | ViewController | null | string | undefined = undefined;
	export let componentProps: undefined | { [key: string]: any; } = undefined;
	// export let routerAnimation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let routerDirection: RouterDirectionType = undefined;

	if (BROWSER) {
		onMount(async () => {
			const IonNavLink = (await import('@ionic/core/components/ion-nav-link')).IonNavLink;

			defineCustomElement('ion-nav-link', IonNavLink);
		});
	}
</script>

<ion-nav-link
	class="{cssClass}"
	component="{component}"
	componentProps="{componentProps}"
	routerDirection="{routerDirection}"
	bind:this="{navLinkComponent}"
>
</ion-nav-link>

<style>
</style>
