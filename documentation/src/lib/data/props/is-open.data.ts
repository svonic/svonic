import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const isOpen: ComponentPropAPI = {
	defaultValue: 'false',
	description: { en: `If true, the modal will open.` },
	hasDemo: false,
	isSpecial: false,
	name: 'isOpen',
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
