import { disabled } from '$lib/data/props/disabled.data';
import { value } from '$lib/data/props/value-input.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const SelectOptionData: ComponentDataAPI = {
	description: {
		en: `Select Options are components that are child elements of a Select. Each option defined is passed and displayed in the Select dialog.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/select-option',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/select-option'
	},
	keyboardNavigationList: [],
	label: 'Select Option',
	methodList: [],
	name: 'select-option',
	propList: [{ ...disabled }, { ...value }],
	slotList: []
};
