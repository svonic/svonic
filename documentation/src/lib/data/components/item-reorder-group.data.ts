import { disabled } from '$lib/data/props/disabled.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const ItemReorderGroupData: ComponentDataAPI = {
	description: {
		en: `The reorder group is a wrapper component for items using the Reorder component. See the Reorder documentation for further information about the anchor component that is used to drag items within the Reorder Group.

	Once the user drags an item and drops it in a new position, the ionItemReorder event is dispatched. A handler for it should be implemented that calls the complete() method.

	The detail property of the ionItemReorder event includes all of the relevant information about the reorder operation, including the from and to indexes. In the context of reordering, an item moves from an index to a new index.`
	},
	dispatchedEventList: [
		{
			description: {
				en: `Event that needs to be listened to in order to complete the reorder action.`
			},
			name: 'ionItemReorder'
		}
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/reorder-group',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/reorder-group'
	},
	keyboardNavigationList: [],
	label: 'Item Reorder Group',
	methodList: [
		{
			description: {
				en: `Completes the reorder operation. Must be called by the ionItemReorder event.

			If a list of items is passed, the list will be reordered and returned in the proper order.

			If no parameters are passed or if true is passed in, the reorder will complete
			and the item will remain in the position it was dragged to. If false is passed,
			the reorder will complete and the item will bounce back to its original position.`
			},
			name: 'complete',
			signature: `complete(listOrReorder?: boolean | any[] | undefined) => Promise<any>`
		}
	],
	name: 'item-reorder-group',
	propList: [{ ...disabled, defaultValue: 'true' }],
	slotList: []
};
