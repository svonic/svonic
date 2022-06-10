import { mode } from '$lib/data/props/mode.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const CardContentData: ComponentDataAPI = {
	description: {
		en: `Card Content is child component of Card that adds some content padding. It is recommended that any text content for a Card should be placed in an Card Content component.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/card-content',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/card-content'
	},
	keyboardNavigationList: [],
	label: 'Card Content',
	methodList: [],
	name: 'card-content',
	propList: [{ ...mode }],
	slotList: []
};
