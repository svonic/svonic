import type { ComponentEventAPI } from '$lib/types/component-data-api.type';

export const click: ComponentEventAPI = {
	description: { en: `This event is dispatched when the component is clicked.` },
	name: 'click'
};
