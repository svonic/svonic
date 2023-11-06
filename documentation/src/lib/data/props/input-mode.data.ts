import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const inputmode: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `A hint to the browser for which keyboard to display. Possible values: "none", "text", "tel", "url", "email", "numeric", "decimal", and "search".`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'inputmode',
	valueList: [
		{
			type: 'string',
			value: 'decimal'
		},
		{
			type: 'string',
			value: 'email'
		},
		{
			type: 'string',
			value: 'none'
		},
		{
			type: 'string',
			value: 'numeric'
		},
		{
			type: 'string',
			value: 'search'
		},
		{
			type: 'string',
			value: 'tel'
		},
		{
			type: 'string',
			value: 'text'
		},
		{
			type: 'string',
			value: 'url'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
