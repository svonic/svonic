import { change } from '$lib/data/events/change.data';
import { animated } from '$lib/data/props/animated.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const AccordionGroupData: ComponentDataAPI = {
	description: {
		en: `Accordion Group is a container for accordion instances. It manages the state of the accordions and provides keyboard navigation.`
	},
	dispatchedEventList: [{ ...change }],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/accordion-group',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/accordion-group'
	},
	keyboardNavigationList: [],
	label: 'Accordion Group',
	methodList: [],
	name: 'accordion-group',
	propList: [
		{
			...animated,
			description: {
				en: `If true, all accordions inside of the accordion group will animate when expanding or collapsing.`
			}
		},
		{ ...disabled },
		{
			defaultValue: 'compact',
			description: {
				en: `Describes the expansion behavior for each accordion. Possible values are "compact" and "inset". Defaults to "compact".`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'expand',
			valueList: [
				{
					type: 'string',
					value: 'compact'
				},
				{
					type: 'string',
					value: 'inset'
				}
			]
		},
		{ ...mode },
		{
			defaultValue: 'undefined',
			description: {
				en: `If true, the accordion group can have multiple accordion components expanded at the same time.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'multiple',
			valueList: [
				{
					type: 'boolean',
					value: 'false'
				},
				{
					type: 'boolean',
					value: 'true'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'false',
			description: {
				en: `If true, the accordion group cannot be interacted with, but does not alter the opacity.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'readonly',
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
		{
			defaultValue: 'undefined',
			description: { en: `The value of the accordion group.` },
			hasDemo: false,
			isSpecial: false,
			name: 'value',
			valueList: [
				{
					type: 'null',
					value: 'null'
				},
				{
					type: 'string',
					value: 'string'
				},
				{
					type: 'string',
					value: 'string[]'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		}
	],
	slotList: []
};
