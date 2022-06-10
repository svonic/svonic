import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const keyboardClose: ComponentPropAPI = {
	defaultValue: 'true',
	description: {
		en: `If true, the keyboard will be automatically dismissed when the overlay is presented.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'keyboardClose',
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
