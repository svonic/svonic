import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const animated: ComponentPropAPI = {
	defaultValue: 'true',
	description: { en: `If true, the component will animate.` },
	hasDemo: false,
	isSpecial: false,
	name: 'animated',
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
