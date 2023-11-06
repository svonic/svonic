<script lang="ts">
	import type { CssClassType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type {
		ComponentProps,
		NavComponent,
		NavComponentWithProps,
		NavOptions,
		TransitionDoneFn,
		ViewController
	} from '@ionic/core';
	import type { IonNav } from '@ionic/core/components/ion-nav';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonNav;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let animated = true;
	// export let animation: ((baseEl: any, opts?: any) => Animation) | undefined = undefined;
	export let root: Function | HTMLElement | ViewController | null | string | undefined;
	// export let rootParams: undefined | { [key: string]: any } = undefined;
	export let swipeGesture: boolean | undefined = undefined;

	export const canGoBack = async () => {
		if (BROWSER && component) {
			return await component.canGoBack();
		}
	};

	export const getActive = async () => {
		if (BROWSER && component) {
			return await component.getActive();
		}
	};

	export const getByIndex = async (index: number) => {
		if (BROWSER && component) {
			return await component.getByIndex(index);
		}
	};

	export const getPrevious = async (view?: ViewController) => {
		if (BROWSER && component) {
			return await component.getPrevious(view);
		}
	};

	export const insert = async <T extends NavComponent>(
		insertIndex: number,
		navComponent: T,
		navComponentProps?: ComponentProps<T> | null,
		opts?: NavOptions | null,
		done?: TransitionDoneFn
	) => {
		if (BROWSER && component) {
			return await component.insert(insertIndex, navComponent, navComponentProps, opts, done);
		}
	};

	export const insertPages = async (
		insertIndex: number,
		insertComponents: NavComponent[] | NavComponentWithProps[],
		opts?: NavOptions | null,
		done?: TransitionDoneFn
	) => {
		if (BROWSER && component) {
			return await component.insertPages(insertIndex, insertComponents, opts, done);
		}
	};

	export const pop = async (opts?: NavOptions | null, done?: TransitionDoneFn) => {
		if (BROWSER && component) {
			return await component.pop(opts, done);
		}
	};

	export const popTo = async (
		indexOrViewCtrl: number | ViewController,
		opts?: NavOptions | null,
		done?: TransitionDoneFn
	) => {
		if (BROWSER && component) {
			return await component.popTo(indexOrViewCtrl, opts, done);
		}
	};

	export const popToRoot = async (opts?: NavOptions | null, done?: TransitionDoneFn) => {
		if (BROWSER && component) {
			return await component.popToRoot(opts, done);
		}
	};

	export const push = async <T extends NavComponent>(
		navComponent: T,
		navComponentProps?: ComponentProps<T> | null,
		opts?: NavOptions | null,
		done?: TransitionDoneFn
	) => {
		if (BROWSER && component) {
			return await component.push(navComponent, navComponentProps, opts, done);
		}
	};

	export const removeIndex = async (
		startIndex: number,
		removeCount?: number,
		opts?: NavOptions | null,
		done?: TransitionDoneFn
	) => {
		if (BROWSER && component) {
			return await component.removeIndex(startIndex, removeCount, opts, done);
		}
	};

	export const setPages = async (
		views: NavComponent[] | NavComponentWithProps[],
		opts?: NavOptions | null,
		done?: TransitionDoneFn
	) => {
		if (BROWSER && component) {
			return await component.setPages(views, opts, done);
		}
	};

	export const setRoot = async <T extends NavComponent>(
		navComponent: T,
		navComponentProps?: ComponentProps<T> | null,
		opts?: NavOptions | null,
		done?: TransitionDoneFn
	) => {
		if (BROWSER && component) {
			return await component.setRoot(navComponent, navComponentProps, opts, done);
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonNav = (await import('@ionic/core/components/ion-nav')).IonNav;

			defineCustomElement('ion-nav', IonNav);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonNavDidChange = (event: CustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionNavDidChange', eventDetail);
	};

	const onIonNavWillChange = (event: CustomEvent) => {
		const eventDetail = event.detail;

		dispatch('ionNavWillChange', eventDetail);
	};
</script>

<ion-nav
	animated="{animated}"
	class="{cssClass}"
	root="{root}"
	swipeGesture="{swipeGesture}"
	bind:this="{component}"
	on:ionNavDidChange="{onIonNavDidChange}"
	on:ionNavWillChange="{onIonNavWillChange}"
>
</ion-nav>

<style>
</style>
