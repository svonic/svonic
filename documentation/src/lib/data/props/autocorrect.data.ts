import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const autocorrect: ComponentPropAPI = {
	defaultValue: 'off',
	description: {
		en: `Whether auto correction should be enabled when the user is entering/editing the text value.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'autocorrect',
	valueList: [
		{
			type: 'string',
			value: 'on'
		},
		{
			type: 'string',
			value: 'off'
		}
	]
};
