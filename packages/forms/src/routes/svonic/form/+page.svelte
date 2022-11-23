<script lang="ts">
	import FormFieldCheckbox from '$lib/components/form-field/FormFieldCheckbox.svelte';
	import FormFieldInput from '$lib/components/form-field/FormFieldInput.svelte';
	import FormFieldInputDate from '$lib/components/form-field/FormFieldInputDate.svelte';
	import FormFieldSelect from '$lib/components/form-field/FormFieldSelect.svelte';
	import FormFieldTextArea from '$lib/components/form-field/FormFieldTextArea.svelte';
	import Form from '$lib/components/form/Form.svelte';
	import { Button, List } from '@svonic/core';
	import { z as zod } from 'zod';

	let formState;
	let formValidationSchema;
	let handleSubmit;

	let formValue = {
		comments: '',
		email: '',
		name: '',
		startDate: '',
		type: '',
		isActive: false
	};

	formValidationSchema = zod.object({
		comments: zod.string().nonempty({ message: 'Comments are required.' }),
		email: zod
			.string()
			.email({ message: 'Invalid email address.' })
			.nonempty({ message: 'Email address is required.' }),
		name: zod.string().nonempty({ message: 'Name is required.' }),
		startDate: zod.string().nonempty({ message: 'Start Date is required.' }),
		type: zod.string().nonempty({ message: 'Type is required.' }),
		isActive: zod.boolean()
	});

	function onSave() {
		console.log('Save Button Clicked');
		console.log('index submitted');
		// handleSubmit();
	}
</script>

<div class="bg-white m-8 p-8">
	<Form
		bind:formValidationSchema="{formValidationSchema}"
		bind:formValue="{formValue}"
		bind:formState="{formState}"
		bind:handleSubmit="{handleSubmit}"
		on:submit="{onSave}"
	>
		<List lines="full">
			<FormFieldInput
				fill="outline"
				label="Name"
				labelPosition="stacked"
				name="name"
			/>
			<FormFieldInput
				fill="solid"
				label="Email"
				labelPosition="floating"
				name="email"
			/>
			<FormFieldInputDate
				label="Start Date"
				name="startDate"
			/>
			<FormFieldSelect
				label="Type"
				name="type"
			/>
			<FormFieldCheckbox
				label="Is Active?"
				labelPosition="fixed"
				name="isActive"
			/>
			<FormFieldTextArea
				label="Comments"
				name="comments"
			/>
		</List>
		<Button type="submit">Submit</Button>
	</Form>
	<div class="mb-8">
		<pre class="text-black">
				{JSON.stringify(formValue, null, 2)}
		</pre>
	</div>
	<div class="mb-8">
		<pre class="text-black">
				{JSON.stringify(formState, null, 2)}
		</pre>
	</div>
</div>

<style>
</style>
