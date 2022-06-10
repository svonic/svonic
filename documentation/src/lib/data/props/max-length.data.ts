import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const maxLength: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `If the value of the type attribute is text, email, search, password, tel, or url, this attribute specifies the maximum number of characters that the user can enter.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'maxLength',
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
