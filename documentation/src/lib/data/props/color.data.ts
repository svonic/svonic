import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const color: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `The color to use from your application's color palette. Default options are: "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark".`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'color',
	valueList: [
		{
			type: 'string',
			value: 'danger'
		},
		{
			type: 'string',
			value: 'dark'
		},
		{
			type: 'string',
			value: 'light'
		},
		{
			type: 'string',
			value: 'medium'
		},
		{
			type: 'string',
			value: 'primary'
		},
		{
			type: 'string',
			value: 'secondary'
		},
		{
			type: 'string',
			value: 'success'
		},
		{
			type: 'string',
			value: 'tertiary'
		},
		{
			type: 'string',
			value: 'warning'
		},
		{
			type: 'string',
			value: 'string'
		}
	]
};
