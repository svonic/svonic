import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const CardTitleData: ComponentDataAPI = {
	description: { en: `Card Title is a child component of Card` },
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/card-title',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/card-title'
	},
	keyboardNavigationList: [],
	label: 'Card Title',
	methodList: [],
	name: 'card-title',
	propList: [{ ...color }, { ...mode }],
	slotList: []
};
