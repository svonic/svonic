<script lang="ts">
	import { browser } from '$app/env';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { ScrollBaseDetail, ScrollDetail } from '@ionic/core/components';
	import type { IonContent } from '@ionic/core/components/ion-content';
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
		if (browser && component) {
			return await component.getScrollElement();
		}
	};

	export const scrollByPoint = async (x: number, y: number, duration: number) => {
		if (browser && component) {
			await component.scrollByPoint(x, y, duration);
		}
	};

	export const scrollToBottom = async (duration?: number) => {
		if (browser && component) {
			await component.scrollToBottom(duration);
		}
	};

	export const scrollToPoint = async (
		x: number | undefined | null,
		y: number | undefined | null,
		duration?: number
	) => {
		if (browser && component) {
			await component.scrollToPoint(x, y, duration);
		}
	};

	export const scrollToTop = async (duration?: number) => {
		if (browser && component) {
			await component.scrollToTop(duration);
		}
	};

	if (browser) {
		onMount(async () => {
			const IonContent = (await import('@ionic/core/components/ion-content')).IonContent;

			defineCustomElement('ion-content', IonContent);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonScroll = (event: CustomEvent) => {
		const eventDetail: ScrollDetail = event.detail;

		dispatch('svo:scroll', eventDetail);
	};

	const onIonScrollEnd = (event: CustomEvent) => {
		const eventDetail: ScrollBaseDetail = event.detail;

		dispatch('svo:scroll-end', eventDetail);
	};

	const onIonScrollStart = (event: CustomEvent) => {
		const eventDetail: ScrollBaseDetail = event.detail;

		dispatch('svo:scroll-start', eventDetail);
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
