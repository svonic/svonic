import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const required: ComponentPropAPI = {
	defaultValue: 'false',
	description: { en: `If true, the user must fill in a value before submitting a form.` },
	hasDemo: false,
	isSpecial: false,
	name: 'required',
	valueList: [
		{
			type: 'boolean',
			value: 'false'
		},
		{
			type: 'boolean',
			value: 'true'
		}
	]
};
