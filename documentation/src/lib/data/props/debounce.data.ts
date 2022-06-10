import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const debounce: ComponentPropAPI = {
	defaultValue: '0',
	description: {
		en: `Set the amount of time, in milliseconds, to wait to trigger the svo:change event after each keystroke.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'debounce',
	valueList: [
		{
			type: 'number',
			value: 'number'
		}
	]
};
