import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const autocapitalize: ComponentPropAPI = {
	defaultValue: 'off',
	description: {
		en: `Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
	Available options: "off", "none", "on", "sentences", "words", "characters".`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'autocapitalize',
	valueList: [
		{
			type: 'string',
			value: 'characters'
		},
		{
			type: 'string',
			value: 'none'
		},
		{
			type: 'string',
			value: 'on'
		},
		{
			type: 'string',
			value: 'off'
		},
		{
			type: 'string',
			value: 'sentences'
		},
		{
			type: 'string',
			value: 'words'
		}
	]
};
