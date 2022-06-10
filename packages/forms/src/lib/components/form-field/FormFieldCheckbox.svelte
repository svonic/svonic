<script lang="ts">
	import type {
		CheckBoxValueType,
		ColorType,
		CssClassType,
		LineType,
		ModeType,
		PositionType
	} from '@svonic/core';
	import { Checkbox } from '@svonic/core';
	import { getContext } from 'svelte';
	import { key } from '../form/context-key';
	import FormField from './FormField.svelte';

	export let color: ColorType = undefined;
	export let disabled = false;
	export let checkBoxCssClass: CssClassType = undefined;
	export let formFieldCssClass: CssClassType = undefined;
	export let indeterminate = false;
	export let label = '';
	export let labelPosition: PositionType = 'stacked';
	export let lines: LineType = undefined;
	export let mode: ModeType = undefined;
	export let name = '';
	export let value: CheckBoxValueType = 'on';

	const { data, errors, formValidationSchema, touched } = getContext(key);

	$: console.log('Checkbox value is ', value);

	function onCheckboxChange(event: CustomEvent) {
		console.log('Checkbox Change', event.detail);
	}
</script>

<FormField
	class="{formFieldCssClass}"
	label="{label}"
	labelPosition="{labelPosition}"
	mode="{mode}"
	lines="{lines}"
	name="{name}"
>
	<Checkbox
		class="{checkBoxCssClass}"
		color="{color}"
		disabled="{disabled}"
		id="{name}"
		indeterminate="{indeterminate}"
		mode="{mode}"
		name="{name}"
		value="{value}"
		bind:checked="{$data[name]}"
		on:svo-change="{onCheckboxChange}"
	/>
</FormField>
