import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const download: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'download',
	valueList: [
		{
			type: 'string',
			value: 'string'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
