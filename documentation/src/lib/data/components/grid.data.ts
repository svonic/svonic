import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const GridData: ComponentDataAPI = {
	description: {
		en: `The grid is a powerful mobile-first flexbox system for building custom layouts.

	It is composed of three units — a grid, row(s) and column(s). Columns will expand to fill the row, and will resize to fit additional columns. It is based on a 12 column layout with different breakpoints based on the screen size. The number of columns can be customized using CSS.

	See the Responsive Grid documentation for more information.
	`
	},
	dispatchedEventList: [],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/grid',
		sourceUrl: 'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/grid'
	},
	keyboardNavigationList: [],
	label: 'Grid',
	methodList: [],
	name: 'grid',
	propList: [
		{
			defaultValue: 'false',
			description: { en: `If true, the grid will have a fixed width.` },
			hasDemo: false,
			isSpecial: false,
			name: 'fixed',
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
	slotList: []
};
