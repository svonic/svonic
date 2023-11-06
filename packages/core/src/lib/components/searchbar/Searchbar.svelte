<script lang="ts">
	import type { CssClassType, AutoCompleteType, AutoCorrectType, ColorType, EnterKeyHintType, InputModeType, ModeType, InputType, ValueType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { SearchbarChangeEventDetail, SearchbarCustomEvent } from '@ionic/core/components';
	import type { IonSearchbar } from '@ionic/core/components/ion-searchbar';
	import { BROWSER } from 'esm-env';
	import { arrowBackSharp } from 'ionicons/icons';
	import { createEventDispatcher, onMount } from 'svelte';

	type ShowButtonType = 'always' | 'focus' | 'never' | undefined;

	let component: IonSearchbar;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let animated = false;
	export let autocomplete: AutoCompleteType = 'off';
	export let autocorrect: AutoCorrectType = 'off';
	export let cancelButtonIcon = arrowBackSharp;
	export let cancelButtonText = 'Cancel';
	export let clearIcon: string | undefined = undefined;
	export let color: ColorType = undefined;
	export let debounce: number | undefined = undefined;
	export let disabled = false;
	export let enterKeyHint: EnterKeyHintType = undefined;
	export let inputmode: InputModeType = undefined;
	export let mode: ModeType = undefined;
	export let placeholder = 'Search';
	export let searchIcon: string | undefined = undefined;
	export let showCancelButton: ShowButtonType = 'never';
	export let showClearButton: ShowButtonType = 'always';
	export let spellcheck = false;
	export let type: InputType = 'search';
	export let value: ValueType = '';

	export const getInputElement = async () => {
		if (BROWSER && component) {
			return await component.getInputElement();
		}
	};

	export const setFocus = async () => {
		if (BROWSER && component) {
			await component.setFocus();
		}
	};

	if (BROWSER) {
		onMount(async () => {
			const IonIcon = (await import('ionicons/components/ion-icon')).IonIcon;
			const IonSearchbar = (await import('@ionic/core/components/ion-searchbar')).IonSearchbar;

			defineCustomElement('ion-icon', IonIcon);
			defineCustomElement('ion-searchbar', IonSearchbar);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = () => {
		const eventDetail = true;

		dispatch('ionBlur', eventDetail);
	};

	const onIonCancel = () => {
		const eventDetail = true;

		dispatch('ionCancel', eventDetail);
	};

	const onIonChange = (event: SearchbarCustomEvent) => {
		const eventDetail: SearchbarChangeEventDetail = event.detail;

		dispatch('ionChange', eventDetail);
	};

	const onIonClear = () => {
		const eventDetail = true;

		dispatch('ionClear', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('ionFocus', eventDetail);
	};

	const onIonInput = (event: KeyboardEvent) => {
		const eventDetail = event.detail;

		dispatch('ionInput', eventDetail);
	};
</script>

<ion-searchbar
	animated="{animated}"
	autocomplete="{autocomplete}"
	autocorrect="{autocorrect}"
	class="{cssClass}"
	cancel-button-icon="{cancelButtonIcon}"
	cancel-button-text="{cancelButtonText}"
	clear-icon="{clearIcon}"
	color="{color}"
	debounce="{debounce}"
	disabled="{disabled}"
	enterkeyhint="{enterKeyHint}"
	inputmode="{inputmode}"
	mode="{mode}"
	placeholder="{placeholder}"
	search-icon="{searchIcon}"
	show-cancel-button="{showCancelButton}"
	show-clear-button="{showClearButton}"
	spellcheck="{spellcheck}"
	type="{type}"
	value="{value}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionCancel="{onIonCancel}"
	on:ionChange="{onIonChange}"
	on:ionClear="{onIonClear}"
	on:ionFocus="{onIonFocus}"
	on:ionInput="{onIonInput}"
>
</ion-searchbar>

<style>
</style>
