import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const max: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `The maximum value, which must not be less than its minimum (min attribute) value.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'max',
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
