import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { slot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const TextData: ComponentDataAPI = {
	description: {
		en: `The Text component is a simple component that can be used to style the text color of any element. The Text component should wrap the element in order to change the text color of that element.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/text',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/text'
	},
	keyboardNavigationList: [],
	label: 'Text',
	methodList: [],
	name: 'text',
	propList: [{ ...color }, { ...mode }, { ...slot }],
	slotList: []
};
