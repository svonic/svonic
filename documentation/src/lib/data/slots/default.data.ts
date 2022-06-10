import type { ComponentSlotAPI } from '$lib/types/component-data-api.type';

export const defaultSlot: ComponentSlotAPI = {
	description: { en: `Content is placed between the named slots if provided without a slot.` },
	name: 'default'
};
