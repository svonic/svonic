import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const svelteKitPrefetch: ComponentPropAPI = {
	defaultValue: 'false',
	description: {
		en: `Allows using the SvelteKit prefetch feature on elements that will render an Anchor tag.`
	},
	hasDemo: false,
	isSpecial: true,
	name: 'svelteKitPrefetch',
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
