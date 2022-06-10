import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const enterKeyHint: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `A hint to the browser for which enter key to display. Possible values: "enter", "done", "go", "next", "previous", "search", and "send".`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'enterKeyHint',
	valueList: [
		{
			type: 'string',
			value: 'done'
		},
		{
			type: 'string',
			value: 'enter'
		},
		{
			type: 'string',
			value: 'go'
		},
		{
			type: 'string',
			value: 'next'
		},
		{
			type: 'string',
			value: 'previous'
		},
		{
			type: 'string',
			value: 'search'
		},
		{
			type: 'string',
			value: 'send'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
