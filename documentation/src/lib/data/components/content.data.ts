import { color } from '$lib/data/props/color.data';
import { defaultSlot } from '$lib/data/slots/default.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ContentData: ComponentDataAPI = {
	description: {
		en: `The content component provides an easy to use content area with some useful methods to control the scrollable area. There should only be one content in a single view.

	In order to place elements outside of the scrollable area, slot="fixed" can be added to the element. This will absolutely position the element placing it in the top left. In order to place the element in a different position, style it using top, right, bottom, and left.`
	},
	dispatchedEventList: [
		{
			description: { en: `Emitted while scrolling. This event is disabled by default.` },
			name: 'svo:scroll'
		},
		{
			description: { en: `Emitted when the scroll has ended.` },
			name: 'svo:scroll-end'
		},
		{
			description: { en: `Emitted when the scroll has started.` },
			name: 'svo:scroll-start'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/content',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/content'
	},
	keyboardNavigationList: [],
	label: 'Content',
	methodList: [
		{
			description: {
				en: `Get the element where the actual scrolling takes place.
			This element can be used to subscribe to scroll events or manually modify
			scrollTop. However, it's recommended to use the API provided by ion-content:

			i.e. Using svo:scroll, svo:scroll-start, svo:scroll-end for scrolling events
			and scrollToPoint() to scroll the content into a certain point.`
			},
			name: 'getScrollElement',
			signature: `getScrollElement() => Promise<HTMLElement>`
		},
		{
			description: { en: `Scroll by a specified X/Y distance in the component.` },
			name: 'scrollByPoint',
			signature: `scrollByPoint(x: number, y: number, duration: number) => Promise<void>`
		},
		{
			description: { en: `Scroll to the bottom of the component.` },
			name: 'scrollToBottom',
			signature: `scrollToBottom(duration?: number) => Promise<void>`
		},
		{
			description: { en: `Scroll to a specified X/Y location in the component.` },
			name: 'scrollToPoint',
			signature: `scrollToPoint(x: number | undefined | null, y: number | undefined | null, duration?: number) => Promise<void>`
		},
		{
			description: { en: `Scroll to the top of the component.` },
			name: 'scrollToTop',
			signature: `scrollToTop(duration?: number) => Promise<void>`
		}
	],
	name: 'content',
	propList: [
		{ ...color },
		{
			defaultValue: 'undefined',
			description: {
				en: `If true and the content does not cause an overflow scroll, the scroll interaction will cause a bounce. If the content exceeds the bounds of ionContent, nothing will change. Note, the does not disable the system bounce on iOS. That is an OS level setting.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'forceOverscroll',
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
				en: `If true, the content will scroll behind the headers and footers. This effect can easily be seen by setting the toolbar to transparent.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'fullscreen',
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
			defaultValue: 'false',
			description: {
				en: `Because of performance reasons, svo:scroll events are disabled by default, in order to enable them and start listening from (svo:scroll), set this property to true.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'scrollEvents',
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
			defaultValue: 'false',
			description: {
				en: `If you want to enable the content scrolling in the X axis, set this property to true.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'scrollX',
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
			defaultValue: 'false',
			description: {
				en: `If you want to disable the content scrolling in the Y axis, set this property to false.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'scrollY',
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
		}
	],
	slotList: [
		{ ...defaultSlot },
		{
			description: { en: `Content is placed in the scrollable area if provided without a slot.` },
			name: 'fixed'
		}
	]
};
