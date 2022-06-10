import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const type: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: { en: `The type of the button.` },
	hasDemo: false,
	isSpecial: false,
	name: 'type',
	valueList: [
		{
			type: 'string',
			value: 'button'
		},
		{
			type: 'string',
			value: 'reset'
		},
		{
			type: 'string',
			value: 'submit'
		}
	]
};
