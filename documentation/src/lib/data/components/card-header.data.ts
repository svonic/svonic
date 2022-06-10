import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { translucent } from '$lib/data/props/translucent.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const CardHeaderData: ComponentDataAPI = {
	description: { en: `Card Header is a header component for Card` },
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/card-header',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/card-header'
	},
	keyboardNavigationList: [],
	label: 'Card Header',
	methodList: [],
	name: 'card-header',
	propList: [{ ...color }, { ...mode }, { ...translucent }],
	slotList: []
};
