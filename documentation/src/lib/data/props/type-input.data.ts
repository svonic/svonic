import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const type: ComponentPropAPI = {
	defaultValue: 'text',
	description: { en: `The type of control to display. The default type is text.` },
	hasDemo: false,
	isSpecial: false,
	name: 'type',
	valueList: [
		{
			type: 'string',
			value: 'date'
		},
		{
			type: 'string',
			value: 'datetime-local'
		},
		{
			type: 'string',
			value: 'email'
		},
		{
			type: 'string',
			value: 'month'
		},
		{
			type: 'string',
			value: 'number'
		},
		{
			type: 'string',
			value: 'password'
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
			value: 'time'
		},
		{
			type: 'string',
			value: 'url'
		},
		{
			type: 'string',
			value: 'week'
		}
	]
};
