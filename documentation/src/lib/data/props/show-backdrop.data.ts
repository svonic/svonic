import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const showBackdrop: ComponentPropAPI = {
	defaultValue: 'true',
	description: { en: `If true, a backdrop will be displayed behind the overlay.` },
	hasDemo: false,
	isSpecial: false,
	name: 'showBackdrop',
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
