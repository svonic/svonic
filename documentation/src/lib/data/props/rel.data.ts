import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const rel: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `Specifies the relationship of the target object to the link object. The value is a space-separated list of link types.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'rel',
	valueList: [
		{
			type: 'string',
			value: 'alternate'
		},
		{
			type: 'string',
			value: 'archives'
		},
		{
			type: 'string',
			value: 'author'
		},
		{
			type: 'string',
			value: 'bookmark'
		},
		{
			type: 'string',
			value: 'external'
		},
		{
			type: 'string',
			value: 'first'
		},
		{
			type: 'string',
			value: 'help'
		},
		{
			type: 'string',
			value: 'index'
		},
		{
			type: 'string',
			value: 'last'
		},
		{
			type: 'string',
			value: 'license'
		},
		{
			type: 'string',
			value: 'me'
		},
		{
			type: 'string',
			value: 'next'
		},
		{
			type: 'string',
			value: 'nofollow'
		},
		{
			type: 'string',
			value: 'noopener'
		},
		{
			type: 'string',
			value: 'noreferrer'
		},
		{
			type: 'string',
			value: 'opener'
		},
		{
			type: 'string',
			value: 'prev'
		},
		{
			type: 'string',
			value: 'search'
		},
		{
			type: 'string',
			value: 'sidebar'
		},
		{
			type: 'string',
			value: 'tag'
		},
		{
			type: 'string',
			value: 'up'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
