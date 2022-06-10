import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const readonly: ComponentPropAPI = {
	defaultValue: 'false',
	description: { en: `	If true, the user cannot modify the value.` },
	hasDemo: false,
	isSpecial: false,
	name: 'readonly',
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
