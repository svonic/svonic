import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const CardSubTitleData: ComponentDataAPI = {
	description: { en: `Card Subtitle is a child component of Card` },
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/card-subtitle',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/card-subtitle'
	},
	keyboardNavigationList: [],
	label: 'Card Subtitle',
	methodList: [],
	name: 'card-subtitle',
	propList: [{ ...color }, { ...mode }],
	slotList: []
};
