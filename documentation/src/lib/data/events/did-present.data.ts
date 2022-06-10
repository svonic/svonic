import type { ComponentEventAPI } from '$lib/types/component-data-api.type';

export const didPresent: ComponentEventAPI = {
	description: { en: `Emitted after the component has presented.` },
	name: 'svo:did-present'
};
