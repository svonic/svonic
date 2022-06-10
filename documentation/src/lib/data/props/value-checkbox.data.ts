import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const value: ComponentPropAPI = {
	defaultValue: 'on',
	description: {
		en: `The value of the checkbox does not mean if it's checked or not, use the checked property for that.

	The value of a checkbox is analogous to the value of an <input type="checkbox">, it's only used when the checkbox participates in a native <form>.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'value',
	valueList: [
		{
			type: 'string',
			value: 'on'
		},
		{
			type: 'string',
			value: 'string'
		}
	]
};
