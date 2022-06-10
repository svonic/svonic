<script lang="ts">
	import { browser } from '$app/env';
	import type { AutoCapitalizeType } from '$lib/types/autocapitalize.type';
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
	import type { InputChangeEventDetail, InputCustomEvent } from '@ionic/core/components';
	import type { IonInput } from '@ionic/core/components/ion-input';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonInput;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let accept: string | undefined = undefined;
	export let autocapitalize: AutoCapitalizeType = 'off';
	export let autocomplete: AutoCompleteType = 'off';
	export let autocorrect: AutoCorrectType = 'off';
	export let autofocus = false;
	export let clearInput = false;
	export let clearOnEdit: boolean | undefined = undefined;
	export let color: ColorType = undefined;
	export let debounce = 0;
	export let disabled = false;
	export let enterKeyHint: EnterKeyHintType = undefined;
	export let id: string | undefined = undefined;
	export let inputMode: InputModeType = undefined;
	export let max: string | undefined = undefined;
	export let maxLength: number | undefined = undefined;
	export let min: string | undefined = undefined;
	export let minLength: number | undefined = undefined;
	export let mode: ModeType = undefined;
	export let multiple: boolean | undefined = undefined;
	export let name = '';
	export let pattern: string | undefined = undefined;
	export let placeholder: null | string | undefined = undefined;
	export let readonly = false;
	export let required = false;
	export let size: number | undefined = undefined;
	export let spellcheck = false;
	export let step: string | undefined = undefined;
	export let type: InputType = 'text';
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
			const IonInput = (await import('@ionic/core/components/ion-input')).IonInput;

			defineCustomElement('ion-input', IonInput);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:blur', eventDetail);
	};

	const onIonChange = (event: InputCustomEvent) => {
		const eventDetail: InputChangeEventDetail = event.detail;

		dispatch('svo:change', eventDetail);
	};

	const onIonFocus = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:focus', eventDetail);
	};

	const onIonInput = (event: InputEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:input', eventDetail);
	};
</script>

<ion-input
	accept="{accept}"
	autocapitalize="{autocapitalize}"
	autocomplete="{autocomplete}"
	autocorrect="{autocorrect}"
	autofocus="{autofocus}"
	class="{cssClass}"
	clear-input="{clearInput}"
	clear-on-edit="{clearOnEdit}"
	color="{color}"
	debounce="{debounce}"
	disabled="{disabled}"
	enterkeyhint="{enterKeyHint}"
	id="{id}"
	inputmode="{inputMode}"
	max="{max}"
	maxlength="{maxLength}"
	min="{min}"
	minlength="{minLength}"
	mode="{mode}"
	multiple="{multiple}"
	name="{name}"
	pattern="{pattern}"
	placeholder="{placeholder}"
	readonly="{readonly}"
	required="{required}"
	size="{size}"
	spellcheck="{spellcheck}"
	step="{step}"
	type="{type}"
	value="{value}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionChange="{onIonChange}"
	on:ionFocus="{onIonFocus}"
	on:ionInput="{onIonInput}"
>
</ion-input>

<style>
</style>
