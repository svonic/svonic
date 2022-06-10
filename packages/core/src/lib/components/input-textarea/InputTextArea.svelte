<script lang="ts">
	import { browser } from '$app/env';
	import type { AutoCapitalizeType } from '$lib/types/autocapitalize.type';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { EnterKeyHintType } from '$lib/types/enter-key-hint.type';
	import type { InputModeType } from '$lib/types/input-mode.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { ValueType } from '$lib/types/value.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { TextareaChangeEventDetail, TextareaCustomEvent } from '@ionic/core/components';
	import type { IonTextarea } from '@ionic/core/components/ion-textarea';
	import { createEventDispatcher, onMount } from 'svelte';

	type WrapType = 'hard' | 'off' | 'soft' | undefined;

	let component: IonTextarea;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let autocapitalize: AutoCapitalizeType = 'off';
	export let autofocus = false;
	export let autoGrow: boolean | undefined = false;
	export let clearOnEdit: boolean | undefined = undefined;
	export let color: ColorType = undefined;
	export let cols: number | undefined = undefined;
	export let debounce = 0;
	export let disabled = false;
	export let enterKeyHint: EnterKeyHintType = undefined;
	export let id: string | undefined = undefined;
	export let inputMode: InputModeType = undefined;
	export let maxLength: number | undefined = undefined;
	export let minLength: number | undefined = undefined;
	export let mode: ModeType = undefined;
	export let name = '';
	export let placeholder: null | string | undefined = undefined;
	export let readonly = false;
	export let required = false;
	export let rows: number | undefined = undefined;
	export let spellcheck = false;
	export let value: ValueType = '';
	export let wrap: WrapType = undefined;

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
			const IonTextarea = (await import('@ionic/core/components/ion-textarea')).IonTextarea;

			defineCustomElement('ion-textarea', IonTextarea);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('svo:blur', eventDetail);
	};

	const onIonChange = (event: TextareaCustomEvent) => {
		const eventDetail: TextareaChangeEventDetail = event.detail;

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

<ion-textarea
	autocapitalize="{autocapitalize}"
	autofocus="{autofocus}"
	auto-grow="{autoGrow}"
	class="{cssClass}"
	clear-on-edit="{clearOnEdit}"
	color="{color}"
	cols="{cols}"
	debounce="{debounce}"
	disabled="{disabled}"
	enterkeyhint="{enterKeyHint}"
	id="{id}"
	inputmode="{inputMode}"
	maxlength="{maxLength}"
	minlength="{minLength}"
	mode="{mode}"
	name="{name}"
	placeholder="{placeholder}"
	readonly="{readonly}"
	required="{required}"
	rows="{rows}"
	spellcheck="{spellcheck}"
	value="{value}"
	wrap="{wrap}"
	bind:this="{component}"
	on:ionBlur="{onIonBlur}"
	on:ionChange="{onIonChange}"
	on:ionFocus="{onIonFocus}"
	on:ionInput="{onIonInput}"
>
</ion-textarea>

<style>
</style>
