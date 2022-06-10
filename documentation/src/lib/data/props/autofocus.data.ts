import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const autofocus: ComponentPropAPI = {
	defaultValue: 'false',
	description: {
		en: `This Boolean attribute lets you specify that a form control should have input focus when the page loads.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'autofocus',
	valueList: [
		{
			type: 'boolean',
			value: 'false'
		},
		{
			type: 'boolean',
			value: 'true'
		}
	]
};
