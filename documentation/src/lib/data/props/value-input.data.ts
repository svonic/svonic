import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const value: ComponentPropAPI = {
	defaultValue: '',
	description: { en: `The value of the input.` },
	hasDemo: false,
	isSpecial: false,
	name: 'value',
	valueList: [
		{
			type: 'null',
			value: 'null'
		},
		{
			type: 'number',
			value: 'number'
		},
		{
			type: 'string',
			value: 'string'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
