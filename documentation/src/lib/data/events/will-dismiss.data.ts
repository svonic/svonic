import type { ComponentEventAPI } from '$lib/types/component-data-api.type';

export const willDismiss: ComponentEventAPI = {
	description: { en: `Emitted before the component has dismissed.` },
	name: 'svo:will-dismiss'
};
