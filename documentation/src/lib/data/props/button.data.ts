import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const button: ComponentPropAPI = {
	defaultValue: 'false',
	description: { en: `If true, a button tag will be rendered and the component will be tappable.` },
	hasDemo: false,
	isSpecial: false,
	name: 'button',
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
