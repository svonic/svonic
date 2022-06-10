import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const backdropDismiss: ComponentPropAPI = {
	defaultValue: 'true',
	description: { en: `If true, the component will be dismissed when the backdrop is clicked.` },
	hasDemo: false,
	isSpecial: false,
	name: 'backdropDismiss',
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
