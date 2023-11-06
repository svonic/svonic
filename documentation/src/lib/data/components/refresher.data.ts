import { disabled } from '$lib/data/props/disabled.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const RefresherData: ComponentDataAPI = {
	description: {
		en: `The refresher provides pull-to-refresh functionality on a content component. The pull-to-refresh pattern lets a user pull down on a list of data using touch in order to retrieve more data.

	Data should be modified during the refresher's output events. Once the async operation has completed and the refreshing should end, call complete() on the refresher.`
	},
	dispatchedEventList: [
		{
			description: {
				en: `Emitted while the user is pulling down the content and exposing the refresher.`
			},
			name: 'ionPull'
		},
		{
			description: {
				en: `Emitted when the user lets go of the content and has pulled down
			further than the pullMin or pulls the content down and exceeds the pullMax.
			Updates the refresher state to refreshing. The complete() method should be
			called when the async operation has completed.`
			},
			name: 'ionRefresh'
		},
		{
			description: { en: `Emitted when the user begins to start pulling down.` },
			name: 'ionStart'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/refresher',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/refresher'
	},
	keyboardNavigationList: [],
	label: 'Refresher',
	methodList: [
		{
			description: { en: `Changes the refresher's state from refreshing to cancelling.` },
			name: 'cancel',
			signature: `cancel() => Promise<void>`
		},
		{
			description: {
				en: `Call complete() when your async operation has completed.
			For example, the refreshing state is while the app is performing
			an asynchronous operation, such as receiving more data from an
			AJAX request. Once the data has been received, you then call this
			method to signify that the refreshing has completed and to close
			the refresher. This method also changes the refresher's state from
			refreshing to completing.`
			},
			name: 'complete',
			signature: `complete() => Promise<void>`
		},
		{
			description: {
				en: `A number representing how far down the user has pulled.
			The number 0 represents the user hasn't pulled down at all. The
			number 1, and anything greater than 1, represents that the user
			has pulled far enough down that when they let go then the refresh will
			happen. If they let go and the number is less than 1, then the
			refresh will not happen, and the content will return to it's original
			position.`
			},
			name: 'getProgress',
			signature: `getProgress() => Promise<number>`
		}
	],
	name: 'refresher',
	propList: [
		{
			defaultValue: '280ms',
			description: {
				en: `Time it takes to close the refresher.
			Does not apply when the refresher content uses a spinner, enabling the native refresher.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'closeDuration',
			valueList: [
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{ ...disabled },
		{
			defaultValue: '1',
			description: {
				en: `How much to multiply the pull speed by. To slow the pull animation down,
			pass a number less than 1. To speed up the pull, pass a number greater
			than 1. The default value is 1 which is equal to the speed of the cursor.
			If a negative value is passed in, the factor will be 1 instead.

			For example: If the value passed is 1.2 and the content is dragged by
			10 pixels, instead of 10 pixels the content will be pulled by 12 pixels
			(an increase of 20 percent). If the value passed is 0.8, the dragged amount
			will be 8 pixels, less than the amount the cursor has moved.

			Does not apply when the refresher content uses a spinner,
			enabling the native refresher.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'pullFactor',
			valueList: [
				{
					type: 'number',
					value: 'number'
				}
			]
		},
		{
			defaultValue: '120',
			description: {
				en: `The maximum distance of the pull until the refresher
			will automatically go into the refreshing state.
			Defaults to the result of pullMin + 60.
			Does not apply when the refresher content uses a spinner,
			enabling the native refresher.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'pullMax',
			valueList: [
				{
					type: 'number',
					value: 'number'
				}
			]
		},
		{
			defaultValue: '60',
			description: {
				en: `The minimum distance the user must pull down until the
			refresher will go into the refreshing state.
			Does not apply when the refresher content uses a spinner,
			enabling the native refresher.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'pullMin',
			valueList: [
				{
					type: 'number',
					value: 'number'
				}
			]
		},
		{
			defaultValue: '280ms',
			description: {
				en: `Time it takes the refresher to snap back to the refreshing state.
			Does not apply when the refresher content uses a spinner,
			enabling the native refresher.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'snapbackDuration',
			valueList: [
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: { en: `Slot work around.` },
			hasDemo: false,
			isSpecial: true,
			name: 'slot',
			valueList: [
				{
					type: 'string',
					value: 'fixed'
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
