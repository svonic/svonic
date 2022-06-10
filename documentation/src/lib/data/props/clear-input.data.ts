import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const clearInput: ComponentPropAPI = {
	defaultValue: 'false',
	description: {
		en: `If true, a clear icon will appear in the input when there is a value. Clicking it clears the input.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'clearInput',
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
