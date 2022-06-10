import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const spellcheck: ComponentPropAPI = {
	defaultValue: 'false',
	description: { en: `If true, the element will have its spelling and grammar checked.` },
	hasDemo: false,
	isSpecial: false,
	name: 'spellcheck',
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
