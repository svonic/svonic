import type { ComponentEventAPI } from '$lib/types/component-data-api.type';

export const change: ComponentEventAPI = {
	description: { en: `Emitted when the value property has changed.` },
	name: 'svo:change'
};
