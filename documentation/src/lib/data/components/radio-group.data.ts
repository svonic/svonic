import { change } from '$lib/data/events/change.data';
import { name } from '$lib/data/props/name.data';
import { value } from '$lib/data/props/value-input.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const RadioGroupData: ComponentDataAPI = {
	description: {
		en: `A radio group is a group of radio buttons. It allows a user to select at most one radio button from a set. Checking one radio button that belongs to a radio group unchecks any previous checked radio button within the same group.`
	},
	dispatchedEventList: [{ ...change }],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/radio-group',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/radio-group'
	},
	keyboardNavigationList: [],
	label: 'Radio Group',
	methodList: [],
	name: 'radio-group',
	propList: [
		{
			defaultValue: 'false',
			description: { en: `If true, the radios can be deselected.` },
			hasDemo: false,
			isSpecial: false,
			name: 'allowEmptySelection',
			valueList: [
				{
					type: 'boolean',
					value: 'false'
				},
				{
					type: 'boolean',
					value: 'true'
				}
			]
		},
		{ ...name },
		{ ...value }
	],
	slotList: []
};
