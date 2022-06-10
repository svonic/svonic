import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const placeholder: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `Instructional text that shows before the input has a value.
	This property applies only when the type property is set to "email",
	"number", "password", "search", "tel", "text", or "url", otherwise it is ignored.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'placeholder',
	valueList: [
		{
			type: 'string',
			value: 'string'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
