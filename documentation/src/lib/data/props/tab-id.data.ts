import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const tabId: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `A tab id must be provided for each Tab. It's used internally to reference the selected tab.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'tabId',
	valueList: [
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
