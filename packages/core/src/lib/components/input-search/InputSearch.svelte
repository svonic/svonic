<script lang="ts">
	import { browser } from '$app/environment';
	import type { AutoCompleteType } from '$lib/types/autocomplete.type';
	import type { AutoCorrectType } from '$lib/types/autocorrect.type';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { EnterKeyHintType } from '$lib/types/enter-key-hint.type';
	import type { InputModeType } from '$lib/types/input-mode.type';
	import type { InputType } from '$lib/types/input.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { ValueType } from '$lib/types/value.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { SearchbarChangeEventDetail, SearchbarCustomEvent } from '@ionic/core/components';
	import type { IonSearchbar } from '@ionic/core/components/ion-searchbar';
	import { createEventDispatcher, onMount } from 'svelte';

	type ShowButtonType = 'always' | 'focus' | 'never' | undefined;

	let component: IonSearchbar;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let animated = false;
	export let autocomplete: AutoCompleteType = 'off';
	export let autocorrect: AutoCorrectType = 'off';
	export let cancelButtonIcon = 'arrow-back-sharp';
	export let cancelButtonText = 'Cancel';
	export let clearIcon: string | undefined = undefined;
	export let color: ColorType = undefined;
	export let debounce: number | undefined = undefined;
	export let disabled = false;
	export let enterKeyHint: EnterKeyHintType = undefined;
	export let inputMode: InputModeType = undefined;
	export let mode: ModeType = undefined;
	export let placeholder = 'Search';
	export let searchIcon: string | undefined = undefined;
	export let showCancelButton: ShowButtonType = 'never';
	export let showClearButton: ShowButtonType = 'always';
	export let spellcheck = false;
	export let type: InputType = 'search';
	export let value: ValueType = '';

	export const getInputElement = async () => {
		if (browser && component) {
			return await component.getInputElement();
		}
	};

	export const setFocus = async () => {
		if (browser && component) {
			await component.setFocus();
		}
	};

	if (browser) {
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

		dispatch('svo:blur', eventDetail);
	};

	const onIonCancel = () => {
		const eventDetail = true;

		dispatch('svo:cancel', eventDetail);
	};

	const onIonClear = () => {
		const eventDetail = true;

		dispatch('svo:clear', eventDetail);
	};

	const onIonChange = (event: SearchbarCustomEvent) => {
		const eventDetail: SearchbarChangeEventDetail = event.detail;

		dispatch('svo:change', eventDetail);
	};

	const onIonFocus = () => {
		const eventDetail = true;

		dispatch('svo:focus', eventDetail);
	};

	const onIonInput = (event: KeyboardEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:input', eventDetail);
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
	inputmode="{inputMode}"
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
