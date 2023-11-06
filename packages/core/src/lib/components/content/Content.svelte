<script lang="ts">
	import type { CssClassType, ColorType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { ScrollBaseDetail, ScrollDetail } from '@ionic/core/components';
	import type { IonContent } from '@ionic/core/components/ion-content';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonContent;

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let color: ColorType = undefined;
	export let forceOverscroll: boolean | undefined = undefined;
	export let fullscreen = false;
	export let scrollEvents = false;
	export let scrollX = false;
	export let scrollY = true;

	export const getScrollElement = async () => {
		if (BROWSER && component) {
			return await component.getScrollElement();
		}
	};

	export const scrollByPoint = async (x: number, y: number, duration: number) => {
		if (BROWSER && component) {
			await component.scrollByPoint(x, y, duration);
		}
	};

	export const scrollToBottom = async (duration?: number) => {
		if (BROWSER && component) {
			await component.scrollToBottom(duration);
		}
	};

	export const scrollToPoint = async (
		x: number | undefined | null,
		y: number | undefined | null,
		duration?: number
	) => {
		if (BROWSER && component) {
			await component.scrollToPoint(x, y, duration);
		}
	};

	export const scrollToTop = async (duration?: number) => {
		if (BROWSER && component) {
			await component.scrollToTop(duration);
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonContent = (await import('@ionic/core/components/ion-content')).IonContent;

			defineCustomElement('ion-content', IonContent);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonScroll = (event: CustomEvent) => {
		const eventDetail: ScrollDetail = event.detail;

		dispatch('ionScroll', eventDetail);
	};

	const onIonScrollEnd = (event: CustomEvent) => {
		const eventDetail: ScrollBaseDetail = event.detail;

		dispatch('ionScrollEnd', eventDetail);
	};

	const onIonScrollStart = (event: CustomEvent) => {
		const eventDetail: ScrollBaseDetail = event.detail;

		dispatch('ionScrollStart', eventDetail);
	};
</script>

<ion-content
	class="{cssClass}"
	color="{color}"
	force-overscroll="{forceOverscroll}"
	fullscreen="{fullscreen}"
	scroll-events="{scrollEvents}"
	scroll-x="{scrollX}"
	scroll-y="{scrollY}"
	bind:this="{component}"
	on:ionScroll="{onIonScroll}"
	on:ionScrollEnd="{onIonScrollEnd}"
	on:ionScrollStart="{onIonScrollStart}"
>
	<slot />
</ion-content>

<style>
</style>
