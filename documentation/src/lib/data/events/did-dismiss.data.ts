import type { ComponentEventAPI } from '$lib/types/component-data-api.type';

export const didDismiss: ComponentEventAPI = {
	description: { en: `Emitted after the component has dismissed.` },
	name: 'didDismiss'
};
