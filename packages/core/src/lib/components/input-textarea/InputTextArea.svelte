<script lang="ts">
	import { browser } from '$app/environment';
	import type { AutoCapitalizeType } from '$lib/types/autocapitalize.type';
	import type { ColorType } from '$lib/types/color.type';
	import type { CssClassType } from '$lib/types/css-class.type';
	import type { EnterKeyHintType } from '$lib/types/enter-key-hint.type';
	import type { FillType } from '$lib/types/fill.type';
	import type { InputModeType } from '$lib/types/input-mode.type';
	import type { LabelPlacementType } from '$lib/types/label-placement.type';
	import type { ModeType } from '$lib/types/mode.type';
	import type { ShapeType } from '$lib/types/shape.type';
	import type { ValueType } from '$lib/types/value.type';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { TextareaChangeEventDetail, TextareaCustomEvent } from '@ionic/core/components';
	import type { IonTextarea } from '@ionic/core/components/ion-textarea';
	import { createEventDispatcher, onMount } from 'svelte';

	type WrapType = 'hard' | 'off' | 'soft' | undefined;

	let component: IonTextarea;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let autocapitalize: AutoCapitalizeType = 'none';
	export let autofocus = false;
	export let autoGrow: boolean | undefined = false;
	export let clearOnEdit: boolean | undefined = undefined;
	export let color: ColorType = undefined;
	export let cols: number | undefined = undefined;
	export let counter = false;
	export let debounce: number | undefined = undefined;
	export let disabled = false;
	export let enterKeyHint: EnterKeyHintType = undefined;
	export let errorText: string | undefined = undefined;
	export let fill: FillType = undefined;
	export let helperText: string | undefined = undefined;
	export let id: string | undefined = undefined;
	export let inputMode: InputModeType = undefined;
	export let label: string | undefined = undefined;
	export let labelPlacement: LabelPlacementType = 'start';
	export let maxLength: number | undefined = undefined;
	export let minLength: number | undefined = undefined;
	export let mode: ModeType = undefined;
	export let name = id;
	export let placeholder: string | undefined = undefined;
	export let readonly = false;
	export let required = false;
	export let rows: number | undefined = undefined;
	export let shape: ShapeType = undefined;
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

<!-- svelte-ignore a11y-autofocus -->
<ion-textarea
	autocapitalize="{autocapitalize}"
	autofocus="{autofocus}"
	auto-grow="{autoGrow}"
	class="{cssClass}"
	clear-on-edit="{clearOnEdit}"
	color="{color}"
	cols="{cols}"
	counter="{counter}"
	debounce="{debounce}"
	disabled="{disabled}"
	enterkeyhint="{enterKeyHint}"
	error-text="{errorText}"
	fill="{fill}"
	helper-text="{helperText}"
	id="{id}"
	inputmode="{inputMode}"
	label="{label}"
	label-placement="{labelPlacement}"
	maxlength="{maxLength}"
	minlength="{minLength}"
	mode="{mode}"
	name="{name}"
	placeholder="{placeholder}"
	readonly="{readonly}"
	required="{required}"
	rows="{rows}"
	shape="{shape}"
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
