import { color } from '$lib/data/props/color.data';
import { mode } from '$lib/data/props/mode.data';
import { slot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const NoteData: ComponentDataAPI = {
	description: {
		en: `Notes are text elements generally used as subtitles that provide more information. Notes are styled to appear grey by default. Notes can be used in an item as metadata text.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/note',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/note'
	},
	keyboardNavigationList: [],
	label: 'Note',
	methodList: [],
	name: 'note',
	propList: [{ ...color }, { ...mode }, { ...slot }],
	slotList: []
};
