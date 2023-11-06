import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { slot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const BadgeData: ComponentDataAPI = {
	description: {
		en: `Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters. They can be used as a notification that there are additional items associated with an element and indicate how many items there are.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	label: 'Badge',
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/badge',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/badge'
	},
	keyboardNavigationList: [],
	methodList: [],
	name: 'badge',
	propList: [{ ...color, hasDemo: true }, { ...mode }, { ...slot }],
	slotList: []
};
