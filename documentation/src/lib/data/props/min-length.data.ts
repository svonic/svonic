import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const minlength: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the minimum number of characters that the user can enter.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'minlength',
	valueList: [
		{
			type: 'number',
			value: 'number'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
