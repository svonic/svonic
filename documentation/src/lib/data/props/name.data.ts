import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const name: ComponentPropAPI = {
	defaultValue: 'this.inputId',
	description: { en: `The name of the control, which is submitted with the form data.` },
	hasDemo: false,
	isSpecial: false,
	name: 'name',
	valueList: [
		{
			type: 'string',
			value: 'string'
		}
	]
};
