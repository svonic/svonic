import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const mode: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: { en: `The mode determines which platform styles to use.` },
	hasDemo: false,
	isSpecial: false,
	name: 'mode',
	valueList: [
		{
			type: 'string',
			value: 'ios'
		},
		{
			type: 'string',
			value: 'md'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
