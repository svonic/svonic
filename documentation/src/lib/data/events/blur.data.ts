import type { ComponentEventAPI } from '$lib/types/component-data-api.type';

export const blur: ComponentEventAPI = {
	description: { en: `Emitted when the component loses focus.` },
	name: 'ionBlur'
};
