import { slot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ThumbnailData: ComponentDataAPI = {
	description: {
		en: `Thumbnails are square components that usually wrap an image or icon. They can be used to make it easier to display a group of larger images or provide a preview of the full-size image.

	Thumbnails can be used by themselves or inside of any element. If placed inside of an Item component, the thumbnail will resize to fit the parent component. To position a thumbnail on the left or right side of an item, set the slot to start or end, respectively.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/thumbnail',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/thumbnail'
	},
	keyboardNavigationList: [],
	label: 'Thumbnail',
	methodList: [],
	name: 'thumbnail',
	propList: [{ ...slot }],
	slotList: []
};
