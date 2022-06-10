<script lang="ts">
	import type {
		AutoCapitalizeType,
		AutoCompleteType,
		AutoCorrectType,
		ColorType,
		CssClassType,
		EnterKeyHintType,
		FillType,
		InputModeType,
		InputType,
		LineType,
		ModeType,
		PositionType,
		ValueType
	} from '@svonic/core';
	import { Input } from '@svonic/core';
	import FormField from './FormField.svelte';

	let hasFocus = false;

	export let autocapitalize: AutoCapitalizeType = 'off';
	export let autocomplete: AutoCompleteType = 'off';
	export let autocorrect: AutoCorrectType = 'off';
	export let autofocus = false;
	export let clearInput = false;
	export let color: ColorType = undefined;
	export let debounce = 0;
	export let disabled = false;
	export let enterKeyHint: EnterKeyHintType = undefined;
	export let fill: FillType = undefined;
	export let formFieldCssClass: CssClassType = undefined;
	export let inputCssClass: CssClassType = undefined;
	export let inputMode: InputModeType = undefined;
	export let label = '';
	export let labelPosition: PositionType = 'stacked';
	export let lines: LineType = undefined;
	export let max: string | undefined = undefined;
	export let maxLength: number | undefined = undefined;
	export let min: string | undefined = undefined;
	export let minLength: number | undefined = undefined;
	export let mode: ModeType = undefined;
	export let name = '';
	export let placeholder: null | string | undefined = undefined;
	export let readonly = false;
	export let required = false;
	export let size: number | undefined = undefined;
	export let spellcheck = false;
	export let step: string | undefined = undefined;
	export let type: InputType = 'text';
	export let value: ValueType = '';

	function onBlur() {
		console.log('has lost focus');
		hasFocus = false;
	}
	function onFocus() {
		console.log('has focus');
		hasFocus = true;
	}
</script>

<FormField
	class="{formFieldCssClass}"
	label="{label}"
	labelPosition="{labelPosition}"
	fill="{fill}"
	mode="{mode}"
	lines="{lines}"
	name="{name}"
>
	<Input
		autocapitalize="{autocapitalize}"
		autocomplete="{autocomplete}"
		autocorrect="{autocorrect}"
		autofocus="{autofocus}"
		class="{inputCssClass} svo-form-field-input"
		clearInput="{clearInput}"
		color="{color}"
		debounce="{debounce}"
		disabled="{disabled}"
		enterKeyHint="{enterKeyHint}"
		id="{name}"
		inputMode="{inputMode}"
		max="{max}"
		maxLength="{maxLength}"
		min="{min}"
		minLength="{minLength}"
		mode="{mode}"
		name="{name}"
		placeholder="{placeholder}"
		readonly="{readonly}"
		required="{required}"
		size="{size}"
		spellcheck="{spellcheck}"
		step="{step}"
		type="{type}"
		value="{value}"
		on:ionBlur="{onBlur}"
		on:ionChange
		on:ionFocus="{onFocus}"
		on:ionInput
	/>
</FormField>

<style>
	/* :global(ion-input.svo-form-field-input) {
		--padding-start: 8px !important;
	}
	:global(.svo-form-field-input) {
		background-color: #e9e9e9;
		border-left: 1px solid #d0d0d0;
		border-right: 1px solid #d0d0d0;
		border-top: 1px solid #d0d0d0;
		padding-left: 4px;
	}
	:global(.svo-form-field-input:focus-within) {
		background-color: transparent;
	} */
</style>
