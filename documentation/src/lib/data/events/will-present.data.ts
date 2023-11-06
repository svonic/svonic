import type { ComponentEventAPI } from '$lib/types/component-data-api.type';

export const willPresent: ComponentEventAPI = {
	description: { en: `Emitted before the component has presented.` },
	name: 'willPresent'
};
