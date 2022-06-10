import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const min: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `The minimum value, which must not be greater than its maximum (max attribute) value.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'min',
	valueList: [
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
