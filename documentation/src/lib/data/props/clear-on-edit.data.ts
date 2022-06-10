import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const clearOnEdit: ComponentPropAPI = {
	defaultValue: 'false',
	description: {
		en: `If true, the value will be cleared after focus upon edit. Defaults to true when type is "password", false for all other types.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'clearOnEdit',
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
