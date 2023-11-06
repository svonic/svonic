<script lang="ts">
	import type { CssClassType, AutoCapitalizeType, AutoCompleteType, AutoCorrectType, ColorType, EnterKeyHintType, FillType, InputModeType, LabelPlacementInputType, ModeType, ShapeType, InputType, ValueType } from '$lib/types';
	import { defineCustomElement } from '$lib/utils/utils';
	import type { InputChangeEventDetail, InputCustomEvent } from '@ionic/core/components';
	import type { IonInput } from '@ionic/core/components/ion-input';
	import { BROWSER } from 'esm-env';
	import { createEventDispatcher, onMount } from 'svelte';

	let component: IonInput;
	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let autocapitalize: AutoCapitalizeType = 'off';
	export let autocomplete: AutoCompleteType = 'off';
	export let autocorrect: AutoCorrectType = 'off';
	export let autofocus = false;
	export let clearInput = false;
	export let clearOnEdit: boolean | undefined = undefined;
	export let color: ColorType = undefined;
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
	export let max: string | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let min: string | undefined = undefined;
	export let minlength: number | undefined = undefined;
	export let mode: ModeType = undefined;
	export let multiple: boolean | undefined = undefined;
	export let name = '';
	export let pattern: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let readonly = false;
	export let required = false;
	export let shape: ShapeType = undefined;
	export let size: number | undefined = undefined;
	export let spellcheck = false;
	export let step: string | undefined = undefined;
	export let type: InputType = 'text';
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
			const IonInput = (await import('@ionic/core/components/ion-input')).IonInput;

			defineCustomElement('ion-input', IonInput);
		});
	}

	const dispatch = createEventDispatcher();

	const onIonBlur = (event: FocusEvent) => {
		const eventDetail = event.detail;

		dispatch('ionBlur', eventDetail);
	};

	const onIonChange = (event: InputCustomEvent) => {
		const eventDetail: InputChangeEventDetail = event.detail;

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
<ion-input
	autocapitalize="{autocapitalize}"
	autocomplete="{autocomplete}"
	autocorrect="{autocorrect}"
	autofocus="{autofocus}"
	class="{cssClass}"
	clear-input="{clearInput}"
	clear-on-edit="{clearOnEdit}"
	color="{color}"
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
	max="{max}"
	maxlength="{maxlength}"
	min="{min}"
	minlength="{minlength}"
	mode="{mode}"
	multiple="{multiple}"
	name="{name}"
	pattern="{pattern}"
	placeholder="{placeholder}"
	readonly="{readonly}"
	required="{required}"
	shape="{shape}"
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
	<slot
		name="label"
		slot="label"
	/>
</ion-input>

<style>
</style>
