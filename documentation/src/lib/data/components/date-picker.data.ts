import { blur } from '$lib/data/events/blur.data';
import { focus } from '$lib/data/events/focus.data';
import { color } from '$lib/data/props/color.data';
import { disabled } from '$lib/data/props/disabled.data';
import { mode } from '$lib/data/props/mode.data';
import { name } from '$lib/data/props/name.data';
import type { ComponentDataAPI } from '$lib/types/component-data-api.type';

export const DatePickerData: ComponentDataAPI = {
	description: {
		en: `The Date Picker presents a calendar interface and time wheel, making it easy for users to select dates and times. Datetimes are similar to the native input elements of datetime-local, however, the Datetime component makes it easy to display the date and time in the preferred format, and manage the datetime values.`
	},
	dispatchedEventList: [
		{ ...blur },
		{
			description: { en: `Emitted when the datetime selection was cancelled.` },
			name: 'svo:cancel'
		},
		{
			description: { en: `Emitted when the value (selected date) has changed.` },
			name: 'svo:change'
		},
		{ ...focus }
	],
	forwardedEventList: [],
	ionic: {
		documentationUrl: 'https://ionicframework.com/docs/api/datetime',
		sourceUrl:
			'https://github.com/ionic-team/ionic-framework/tree/main/core/src/components/datetime'
	},
	keyboardNavigationList: [],
	label: 'Date Picker',
	methodList: [
		{
			description: {
				en: `Emits the svo:cancel event and optionally closes the popover or modal that the datetime was presented in.`
			},
			name: 'cancel',
			signature: `cancel(closeOverlay?: boolean) => Promise<void>`
		},
		{
			description: {
				en: `Confirms the selected datetime value, updates the value property, and optionally closes the popover or modal that the datetime was presented in.`
			},
			name: 'confirm',
			signature: `cancel(closeOverlay?: boolean) => Promise<void>`
		},
		{
			description: {
				en: `Resets the internal state of the datetime but does not update the value.
			Passing a valid ISO-8601 string will reset the state of the component to the provided date.
			If no value is provided, the internal state will be reset to today.`
			},
			name: 'reset',
			signature: `reset(startDate?: string | undefined) => Promise<void>`
		}
	],
	name: 'date-picker',
	propList: [
		{
			defaultValue: 'Cancel',
			description: { en: `The text to display on the picker's cancel button.` },
			hasDemo: false,
			isSpecial: false,
			name: 'cancelText',
			valueList: [
				{
					type: 'string',
					value: 'Cancel'
				},
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{
			defaultValue: 'Clear',
			description: { en: `The text to display on the picker's cancel button.` },
			hasDemo: false,
			isSpecial: false,
			name: 'clearText',
			valueList: [
				{
					type: 'string',
					value: 'Clear'
				},
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{ ...color },
		{
			defaultValue: 'undefined',
			description: {
				en: `Values used to create the list of selectable days. By default
			every day is shown for the given month. However, to control exactly which days of
			the month to display, the dayValues input can take a number, an array of numbers, or
			a string of comma separated numbers. Note that even if the array days have an invalid
			number for the selected month, like 31 in February, it will correctly not show
			days which are not valid for the selected month.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'dayValues',
			valueList: [
				{
					type: 'number',
					value: 'number'
				},
				{
					type: 'number',
					value: 'number[]'
				},
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
		{ ...disabled },
		{
			defaultValue: 'Done',
			description: { en: `The text to display on the picker's "Done" button.` },
			hasDemo: false,
			isSpecial: false,
			name: 'doneText',
			valueList: [
				{
					type: 'string',
					value: 'Clear'
				},
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{
			defaultValue: '0',
			description: {
				en: `The first day of the week to use for the datetime. The default value is 0 and represents Sunday.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'firstDayOfWeek',
			valueList: [
				{
					type: 'number',
					value: '0'
				},
				{
					type: 'number',
					value: '1'
				},
				{
					type: 'number',
					value: '2'
				},
				{
					type: 'number',
					value: '3'
				},
				{
					type: 'number',
					value: '4'
				},
				{
					type: 'number',
					value: '5'
				},
				{
					type: 'number',
					value: '6'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `The hour cycle of the datetime. If no value is set, this is specified by the current locale.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'hourCycle',
			valueList: [
				{
					type: 'string',
					value: 'h12'
				},
				{
					type: 'string',
					value: 'h24'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `Values used to create the list of selectable hours. By default
			the hour values range from 0 to 23 for 24-hour, or 1 to 12 for 12-hour. However,
			to control exactly which hours to display, the hourValues input can take a number, an
			array of numbers, or a string of comma separated numbers.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'hourValues',
			valueList: [
				{
					type: 'number',
					value: 'number'
				},
				{
					type: 'number',
					value: 'number[]'
				},
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
			description: {
				en: `The locale to use for the datetime. This impacts month and day name formatting.
			The 'default' value refers to the default locale set by your device.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'locale',
			valueList: [
				{
					type: 'string',
					value: 'default'
				},
				{
					type: 'string',
					value: 'string'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `The maximum datetime allowed. Value must be a date string
			following the ISO 8601 datetime format standard,
			1996-12-19. The format does not have to be specific to an exact
			datetime. For example, the maximum could just be the year, such as 1994.
			Defaults to the end of this year.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'max',
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
			description: {
				en: `The minimum datetime allowed. Value must be a date string
			following the ISO 8601 datetime format standard,
			such as 1996-12-19. The format does not have to be specific to an exact
			datetime. For example, the minimum could just be the year, such as 1994.
			Defaults to the beginning of the year, 100 years ago from today.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'min',
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
			description: {
				en: `Values used to create the list of selectable minutes. By default
			the minutes range from 0 to 59. However, to control exactly which minutes to display,
			the minuteValues input can take a number, an array of numbers, or a string of comma
			separated numbers. For example, if the minute selections should only be every 15 minutes,
			then this input value would be minuteValues="0,15,30,45".`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'minuteValues',
			valueList: [
				{
					type: 'number',
					value: 'number'
				},
				{
					type: 'number',
					value: 'number[]'
				},
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
		{ ...mode },
		{
			defaultValue: 'default',
			description: {
				en: `Values used to create the list of selectable months. By default
			the month values range from 1 to 12. However, to control exactly which months to
			display, the monthValues input can take a number, an array of numbers, or a string of
			comma separated numbers. For example, if only summer months should be shown, then this
			input value would be monthValues="6,7,8". Note that month numbers do not have a
			zero-based index, meaning January's value is 1, and December's is 12.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'monthValues',
			valueList: [
				{
					type: 'number',
					value: 'number'
				},
				{
					type: 'number',
					value: 'number[]'
				},
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
		{ ...name },
		{
			defaultValue: 'date-time',
			description: {
				en: `Which values you want to select. 'date' will show
			a calendar picker to select the month, day, and year. 'time'
			will show a time picker to select the hour, minute, and (optionally)
			AM/PM. 'date-time' will show the date picker first and time picker second.
			'time-date' will show the time picker first and date picker second.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'presentation',
			valueList: [
				{
					type: 'string',
					value: 'date'
				},
				{
					type: 'string',
					value: 'date-time'
				},
				{
					type: 'string',
					value: 'month'
				},
				{
					type: 'string',
					value: 'month-year'
				},
				{
					type: 'string',
					value: 'time'
				},
				{
					type: 'string',
					value: 'time-date'
				},
				{
					type: 'string',
					value: 'year'
				}
			]
		},
		{
			defaultValue: 'false',
			description: { en: `If true, the datetime appears normal but is not interactive.` },
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
			defaultValue: 'false',
			description: {
				en: `If true, a "Clear" button will be rendered alongside
			the default "Cancel" and "OK" buttons at the bottom of the datetime
			component. Developers can also use the button slot
			if they want to customize these buttons. If custom
			buttons are set in the button slot then the
			default buttons will not be rendered.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'showClearButton',
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
				en: `If true, the default "Cancel" and "OK" buttons
			will be rendered at the bottom of the ion-datetime
			component. Developers can also use the button slot
			if they want to customize these buttons. If custom
			buttons are set in the button slot then the
			default buttons will not be rendered.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'showDefaultButtons',
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
			defaultValue: 'true',
			description: {
				en: `If true, the default "Time" label will be rendered
			for the time selector of the ion-datetime component.
			Developers can also use the time-label slot
			if they want to customize this label. If a custom
			label is set in the time-label slot then the
			default label will not be rendered.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'showDefaultTimeLabel',
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
				en: `If true, a header will be shown above the calendar
			picker. On ios mode this will include the
			slotted title, and on md mode this will include
			the slotted title and the selected date.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'showDefaultTitle',
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
			defaultValue: 'fixed',
			description: {
				en: `If cover, the datetime will expand to cover the full width of its container.
			If fixed, the datetime will have a fixed width.`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'size',
			valueList: [
				{
					type: 'string',
					value: 'cover'
				},
				{
					type: 'string',
					value: 'fixed'
				}
			]
		},
		{
			defaultValue: 'fixed',
			description: { en: `The value of the datetime as a valid ISO 8601 datetime string.` },
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
					type: 'undefined',
					value: 'undefined'
				}
			]
		},
		{
			defaultValue: 'undefined',
			description: {
				en: `Values used to create the list of selectable years. By default
			the year values range between the min and max datetime inputs. However, to
			control exactly which years to display, the yearValues input can take a number, an array
			of numbers, or string of comma separated numbers. For example, to show upcoming and
			recent leap years, then this input's value would be yearValues="2024,2020,2016,2012,2008".`
			},
			hasDemo: false,
			isSpecial: false,
			name: 'yearValues',
			valueList: [
				{
					type: 'number',
					value: 'number'
				},
				{
					type: 'number',
					value: 'number[]'
				},
				{
					type: 'string',
					value: 'string'
				},
				{
					type: 'undefined',
					value: 'undefined'
				}
			]
		}
	],
	slotList: [
		{
			description: { en: `The buttons in the datetime.` },
			name: 'buttons'
		},
		{
			description: { en: `The label for the time selector in the datetime.` },
			name: 'time-label'
		},
		{
			description: { en: `The title of the datetime.` },
			name: 'title'
		}
	]
};
