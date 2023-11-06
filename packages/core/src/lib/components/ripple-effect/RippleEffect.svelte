<script lang="ts">
	import { defineCustomElement } from '$lib/utils/utils';
	import type { IonRippleEffect } from '@ionic/core/components/ion-ripple-effect';
	import { BROWSER } from 'esm-env';
	import { onMount } from 'svelte';

	type RippleType = 'bounded' | 'unbounded';

	let component: IonRippleEffect;

	export let type: RippleType = 'bounded';

	export const addRipple = async (x: number, y: number) => {
		if (BROWSER && component) {
			await component.addRipple(x, y);
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonRippleEffect = (await import('@ionic/core/components/ion-ripple-effect'))
				.IonRippleEffect;

			defineCustomElement('ion-ripple-effect', IonRippleEffect);
		});
	}
</script>

<ion-ripple-effect
	type="{type}"
	bind:this="{component}"></ion-ripple-effect>

<style>
</style>
