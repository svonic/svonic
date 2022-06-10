<script lang="ts">
	import type { CssClassType, FillType, LineType, ModeType, PositionType } from '@svonic/core';
	import { Item, Label } from '@svonic/core';
	import { getContext } from 'svelte';
	import { key } from '../form/context-key';

	let cssClass: CssClassType = undefined;
	let hasFocus = false;
	let isRequired = false;

	export { cssClass as class };

	export let fill: FillType = undefined;
	export let label = '';
	export let labelPosition: PositionType = 'stacked';
	export let lines: LineType = undefined;
	export let mode: ModeType = undefined;
	export let name = '';

	const { data, errors, formValidationSchema, touched } = getContext(key);

	$: errorMessageList = $errors[name] ? $errors[name] : '';
	$: isInValid = $errors[name] && $touched[name] === true ? true : false;
	$: isValid = !$errors[name] && $touched[name] === true ? true : false;

	function setIsRequired() {
		isRequired = formValidationSchema.shape[name]['nonempty'] ? true : false;
	}

	setIsRequired();

	function onBlur() {
		console.log('has lost focus');
		hasFocus = false;
	}

	function onFocus() {
		console.log('has focus');
		hasFocus = true;
	}
</script>

<Item
	class="item-label item-label-{labelPosition} svo-form-field {cssClass}"
	fill="{fill}"
	isInValid="{isInValid}"
	isValid="{isValid}"
	id="{name}"
	lines="{lines}"
	mode="{mode}"
>
	{#if labelPosition !== undefined || fill !== 'outline'}
		<Label
			class="svo-form-field-label svo-form-field-label-{labelPosition} {isRequired === true
				? 'svo-form-field-label-required'
				: ''}"
			mode="{mode}"
			position="{labelPosition}">{label}</Label
		>
	{/if}

	<svelte:fragment slot="start">
		<slot name="start" />
	</svelte:fragment>

	<slot />

	<svelte:fragment slot="end">
		<slot name="end" />
	</svelte:fragment>

	<svelte:fragment slot="helper">
		<slot name="helper" />
	</svelte:fragment>

	<svelte:fragment slot="error">
		<slot name="error" />
	</svelte:fragment>
</Item>
<div class="svo-form-field-message">
	<p class="text-red-500">
		<small>{errorMessageList}</small>
	</p>
</div>

<!-- <ValidationMessage for="{name}" let:messages="{message}">
	<div class="svo-form-field-message">
		<ion-text color="danger">
			<small>{errorMessageList}</small>
		</ion-text>
		{#if counter}<span>{name}.length} / {counter}</span>{/if}
	</div>
</ValidationMessage> -->
<style>
	/* :global(.svo-form-field) {
		--inner-padding-bottom: 0;
		--inner-padding-end: 0;
		--inner-padding-start: 0;
		--inner-padding-top: 0;
		--padding-end: 0;
		--padding-start: 0;
	}

	:global(.svo-form-field-label) {
		font-size: 0.875rem !important;
		font-weight: 500;
	}

	:global(.svo-form-field-label-fixed) {
	}

	:global(.svo-form-field-label-stacked) {
		transform: translateY(0%) !important;
	} */

	/* :global(.svo-form-field-label-required:after) {
		color: var(--highlight-color-invalid);
		content: '*';
		display: inline-block;
		font-size: 1rem;
		font-weight: 500;
		margin-left: 2px;
		margin-top: -4px;
		vertical-align: top;
	} */

	.svo-form-field-message {
		line-height: 1rem;
		margin-top: 0.25rem;
		min-height: 1.25rem;
	}
</style>
