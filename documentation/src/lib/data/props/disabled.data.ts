import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const disabled: ComponentPropAPI = {
	defaultValue: 'false',
	description: { en: `If true, the user cannot interact with the component.` },
	hasDemo: false,
	isSpecial: false,
	name: 'disabled',
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
