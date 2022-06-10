import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const routerDirection: ComponentPropAPI = {
	defaultValue: 'forward',
	description: {
		en: `When using a router, it specifies the transition direction when navigating to another page using href.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'routerDirection',
	valueList: [
		{
			type: 'string',
			value: 'back'
		},
		{
			type: 'string',
			value: 'forward'
		},
		{
			type: 'string',
			value: 'root'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
