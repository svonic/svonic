import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const translucent: ComponentPropAPI = {
	defaultValue: 'false',
	description: {
		en: `If true, the Header will be translucent. Only applies when the mode is "ios" and the device supports backdrop-filter.`
	},
	hasDemo: false,
	isSpecial: true,
	name: 'translucent',
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
