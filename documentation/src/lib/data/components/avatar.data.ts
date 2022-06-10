import { toSlot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const AvatarData: ComponentDataAPI = {
	description: {
		en: `Avatars are circular components that usually wrap an image or icon. They can be used to represent a person or an object.

	Avatars can be used by themselves or inside of any element. If placed inside of an Chip or Item, the avatar will resize to fit the parent component. To position an avatar on the left or right side of an Item, set the slot to start or end, respectively.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/avatar',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/avatar'
	},
	keyboardNavigationList: [],
	label: 'Avatar',
	methodList: [],
	name: 'avatar',
	propList: [{ ...toSlot }],
	slotList: []
};
