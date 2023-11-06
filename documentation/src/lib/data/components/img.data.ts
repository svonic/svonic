import { slot } from '$lib/data/props/to-slot.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ImgData: ComponentDataAPI = {
	description: {
		en: `Image is a component that will lazily load an image when ever the tag is in the viewport. This is extremely useful when generating a large list as images are only loaded when they're visible. The component uses Intersection Observer internally, which is supported in most modern browser, but falls back to a setTimeout when it is not supported.`
	},
	dispatchedEventList: [
		{
			description: { en: `Emitted when the img fails to load.` },
			name: 'ionError'
		},
		{
			description: { en: `Emitted when the image has finished loading.` },
			name: 'ionImgDidLoad'
		},
		{
			description: { en: `Emitted when the img src has been set.` },
			name: 'ionImgWillLoad'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/image',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/image'
	},
	keyboardNavigationList: [],
	label: 'Img',
	methodList: [],
	name: 'img',
	propList: [
		{
			defaultValue: 'undefined',
			description: {
				en: `This attribute defines the alternative text describing the image.
			Users will see this text displayed if the image URL is wrong,
			the image is not in one of the supported formats, or if the image is not yet downloaded.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'alt',
			valueList: [
				{
					type: 'string',
					value: 'string'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: { en: `The image URL. This attribute is mandatory for the <img> element.` },
			hasDemo: false,
			isSpecial: false,
			name: 'src',
			valueList: [
				{
					type: 'string',
					value: 'string'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{ ...slot }
	],
	slotList: []
};
