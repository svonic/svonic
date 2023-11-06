<script lang="ts">
	import type { CssClassType, AutoCapitalizeType, ColorType, EnterKeyHintType, FillType, InputModeType, LabelPlacementInputType, ModeType, ShapeType, ValueType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { TextareaChangeEventDetail, TextareaCustomEvent } from '@ionic/core/components';
	import type { IonTextarea } from '@ionic/core/components/ion-textarea';
	import { BROWSER } from 'esm-env';
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
	export let inputmode: InputModeType = undefined;
	export let label: string | undefined = undefined;
	export let labelPlacement: LabelPlacementInputType = 'start';
	export let maxlength: number | undefined = undefined;
	export let minlength: number | undefined = undefined;
	export let mode: ModeType = undefined;
	export let name = '';
	export let placeholder: string | undefined = undefined;
	export let readonly = false;
	export let required = false;
	export let rows: number | undefined = undefined;
	export let shape: ShapeType = undefined;
	export let spellcheck = false;
	export let value: ValueType = '';
	export let wrap: WrapType = undefined;

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
			const IonTextarea = (await import('@ionic/core/components/ion-textarea')).IonTextarea;

			defineCustomElement('ion-textarea', IonTextarea);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('ionBlur', eventDetail);
	};

	const onIonChange = (event: TextareaCustomEvent) => {
		const eventDetail: TextareaChangeEventDetail = event.detail;

		dispatch('ionChange', eventDetail);
	};

	const onIonFocus = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('ionFocus', eventDetail);
	};

	const onIonInput = (event: InputEvent) => {
		const eventDetail = event.detail;

		dispatch('ionInput', eventDetail);
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
	inputmode="{inputmode}"
	label="{label}"
	label-placement="{labelPlacement}"
	maxlength="{maxlength}"
	minlength="{minlength}"
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
	<slot
		name="label"
		slot="label"
	/>
</ion-textarea>

<style>
</style>
