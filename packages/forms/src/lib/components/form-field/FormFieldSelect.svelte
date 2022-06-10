<script lang="ts">
	import type {
		CssClassType,
		FillType,
		InterfaceType,
		LineType,
		ModeType,
		PositionType,
		ValueType
	} from '@svonic/core';
	import { Select } from '@svonic/core';
	import { getContext } from 'svelte';
	import { key } from '../form/context-key';
	import FormField from './FormField.svelte';

	let customOption = {
		dismissOnSelect: 'true'
	};
	let hasFocus = false;

	export let label = '';
	export let fill: FillType = undefined;
	export let formFieldCssClass: CssClassType = undefined;
	export let interfaceType: InterfaceType = 'alert';
	export let labelPosition: PositionType = 'stacked';
	export let lines: LineType = undefined;
	export let mode: ModeType = undefined;
	export let name = '';
	export let placeholder: null | string | undefined = undefined;
	export let selectCssClass: CssClassType = undefined;
	export let value: ValueType = '';

	function onBlur() {
		console.log('has lost focus');
		hasFocus = false;
	}

	function onFocus() {
		console.log('has focus');
		hasFocus = true;
	}
	const { data, errors, formValidationSchema, touched } = getContext(key);

	$: console.log('Select value is ', value);
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
	<Select
		class="{selectCssClass} svo-form-field-select"
		interfaceOptions="{customOption}"
		interfaceType="{interfaceType}"
		mode="{mode}"
		name="{name}"
		placeholder="{placeholder}"
		bind:value="{$data[name]}"
	>
		<slot />
	</Select>
</FormField>

<style>
	/* :global(ion-input.svo-form-field-input) {
		--padding-start: 8px !important;
	}

	:global(.svo-form-field-select) {
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
