import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const href: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'href',
	valueList: [
		{
			type: 'string',
			value: 'string'
		},
		{
			type: 'string',
			value: 'undefined'
		}
	]
};
