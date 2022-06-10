import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const target: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `Specifies where to display the linked URL. Only applies when an href is provided. Special keywords: "_blank", "_self", "_parent", "_top".`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'target',
	valueList: [
		{
			type: 'string',
			value: '_blank'
		},
		{
			type: 'string',
			value: '_self'
		},
		{
			type: 'string',
			value: '_parent'
		},
		{
			type: 'string',
			value: '_top'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
