<script lang="ts">
	import type {
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
	import { Button, Content, DatePicker, Input, Ionicon, Menu } from '@svonic/core';
	import { calendarClearOutline } from 'ionicons/icons/index.js';
	import { getContext } from 'svelte';
	import { key } from '../form/context-key';
	import FormField from './FormField.svelte';

	let hasFocus = false;

	export let autofocus = false;
	export let clearInput = false;
	export let color: ColorType = undefined;
	export let debounce = 0;
	export let disabled = false;
	export let datePickerCssClass: CssClassType = undefined;
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
	export let value: ValueType = '';

	let type: InputType = 'text';

	const { data, errors, formValidationSchema, touched } = getContext(key);

	$: console.log('Select value is ', value);
	// $: value = $data[name];

	function onBlur() {
		console.log('has lost focus');
		hasFocus = false;
	}

	function onDidDismiss(event: CustomEvent) {
		const role = event.detail;

		console.log('onDidDismiss resolved with role', role);
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
	<div class="flex w-full svo-form-field-input">
		<Input
			autofocus="{autofocus}"
			class="{inputCssClass} flex-grow"
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
			type="{type}"
			bind:value="{$data[name]}"
			on:ionBlur="{onBlur}"
			on:ionChange
			on:ionFocus="{onFocus}"
			on:ionInput
		/>

		<Button color="dark" fill="clear" id="{name}-button">
			<Ionicon icon="{calendarClearOutline}" toSlot="icon-only" />
		</Button>
		<Menu
			class="{datePickerCssClass}"
			dismissOnSelect="{true}"
			trigger="{name}-button"
			triggerAction="click"
			on:onDidDismiss="{onDidDismiss}"
		>
			<Content>
				<DatePicker presentation="date" bind:value="{$data[name]}" />
			</Content>
		</Menu>
	</div>
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
