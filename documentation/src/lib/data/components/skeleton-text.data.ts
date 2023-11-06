import { animated } from '$lib/data/props/animated.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const SkeletonTextData: ComponentDataAPI = {
	description: {
		en: `Skeleton Text is a component for rendering placeholder content. The element will render a gray block at the specified width.`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/skeleton-text',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/skeleton-text'
	},
	keyboardNavigationList: [],
	label: 'Skeleton Text',
	methodList: [],
	name: 'skeleton-text',
	propList: [
		{ ...animated, defaultValue: 'false' },
		{
			defaultValue: '100%',
			description: {
				en: `The height of the SkeletonText. Should be a valid CSS value.`
			},
			hasDemo: false,
			isSpecial: true,
			name: 'height',
			valueList: [
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{
			defaultValue: '100%',
			description: {
				en: `The width of the SkeletonText. Should be a valid CSS value.`
			},
			hasDemo: false,
			isSpecial: true,
			name: 'width',
			valueList: [
				{
					type: 'string',
					value: 'string'
				}
			]
		}
	],
	slotList: []
};
