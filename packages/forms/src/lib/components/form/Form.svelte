<script lang="ts">
	import { validateSchema } from '@felte/validator-zod';
	import type { CssClassType } from '@svonic/core';
	import { createForm } from 'felte';
	import { createEventDispatcher, setContext } from 'svelte';
	import { key } from './context-key';

	let cssClass: CssClassType = undefined;

	export { cssClass as class };

	export let formState = {};
	export let formValidationSchema;
	export let formValue;

	const dispatch = createEventDispatcher();

	// const {
	// createSubmitHandler,
	// form,
	// data,
	// errors,
	// isValid,
	// isSubmitting,
	// reset,
	// touched
	// } = createForm<z.infer<typeof formValidationSchema>, ValidatorConfig>({
	// 	initialValues: formValue,
	// 	extend: validator({ schema }),
	// 	validateSchema: formValidationSchema,
	// onSubmit: (values) => {
	// 	console.log('form submitted'), dispatch('submit');
	// },
	// onError: (errors) => console.log('errors', errors),
	// onTouched: (touched: boolean) => console.log('touched', touched)
	// });

	const { createSubmitHandler, form, data, errors, isValid, isSubmitting, reset, touched } =
		createForm({
			initialValues: formValue,
			validate: validateSchema(formValidationSchema),
			onSubmit: (values) => {
				console.log('form submitted'), dispatch('submit');
			},
			onError: (errors) => console.log('errors', errors),
			onTouched: (touched: boolean) => console.log('touched', touched)
		});

	$: formState = {
		data: $data,
		errors: $errors,
		isValid: $isValid,
		isSubmitting: $isSubmitting,
		touched: $touched
	};

	export const handleSubmit = createSubmitHandler({
		onSubmit: (values) => console.log('Alternative onSubmit')
	});

	setContext(key, {
		form,
		data,
		errors,
		touched,
		formValidationSchema
	});
</script>

<form
	class="{cssClass}"
	use:form
>
	<slot
		form="{form}"
		errors="{errors}"
		touched="{touched}"
	/>
</form>
