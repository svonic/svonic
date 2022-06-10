import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const autocomplete: ComponentPropAPI = {
	defaultValue: 'off',
	description: {
		en: `Indicates whether the value of the control can be automatically completed by the browser.`
	},
	hasDemo: false,
	isSpecial: false,
	name: 'autocomplete',
	valueList: [
		{
			type: 'string',
			value: 'additional-name'
		},
		{
			type: 'string',
			value: 'address-level1'
		},
		{
			type: 'string',
			value: 'address-level2'
		},
		{
			type: 'string',
			value: 'address-level3'
		},
		{
			type: 'string',
			value: 'address-level4'
		},
		{
			type: 'string',
			value: 'address-line1'
		},
		{
			type: 'string',
			value: 'address-line2'
		},
		{
			type: 'string',
			value: 'address-line3'
		},
		{
			type: 'string',
			value: 'bday'
		},
		{
			type: 'string',
			value: 'bday-day'
		},
		{
			type: 'string',
			value: 'bday-month'
		},
		{
			type: 'string',
			value: 'bday-year'
		},
		{
			type: 'string',
			value: 'cc-additional-name'
		},
		{
			type: 'string',
			value: 'cc-csc'
		},
		{
			type: 'string',
			value: 'cc-exp'
		},
		{
			type: 'string',
			value: 'cc-exp-month'
		},
		{
			type: 'string',
			value: 'cc-exp-year'
		},
		{
			type: 'string',
			value: 'cc-family-name'
		},
		{
			type: 'string',
			value: 'cc-given-name'
		},
		{
			type: 'string',
			value: 'cc-name'
		},
		{
			type: 'string',
			value: 'cc-number'
		},
		{
			type: 'string',
			value: 'cc-type'
		},
		{
			type: 'string',
			value: 'country'
		},
		{
			type: 'string',
			value: 'country-name'
		},
		{
			type: 'string',
			value: 'current-password'
		},
		{
			type: 'string',
			value: 'email'
		},
		{
			type: 'string',
			value: 'family-name'
		},
		{
			type: 'string',
			value: 'given-name'
		},
		{
			type: 'string',
			value: 'honorific-prefix'
		},
		{
			type: 'string',
			value: 'honorific-suffix'
		},
		{
			type: 'string',
			value: 'impp'
		},
		{
			type: 'string',
			value: 'language'
		},
		{
			type: 'string',
			value: 'name'
		},
		{
			type: 'string',
			value: 'new-password'
		},
		{
			type: 'string',
			value: 'nickname'
		},
		{
			type: 'string',
			value: 'off'
		},
		{
			type: 'string',
			value: 'on'
		},
		{
			type: 'string',
			value: 'one-time-code'
		},
		{
			type: 'string',
			value: 'organization'
		},
		{
			type: 'string',
			value: 'organization-title'
		},
		{
			type: 'string',
			value: 'photo'
		},
		{
			type: 'string',
			value: 'postal-code'
		},
		{
			type: 'string',
			value: 'sex'
		},
		{
			type: 'string',
			value: 'street-address'
		},
		{
			type: 'string',
			value: 'tel'
		},
		{
			type: 'string',
			value: 'tel-area-code'
		},
		{
			type: 'string',
			value: 'tel-country-code'
		},
		{
			type: 'string',
			value: 'tel-extension'
		},
		{
			type: 'string',
			value: 'tel-local'
		},
		{
			type: 'string',
			value: 'tel-national'
		},
		{
			type: 'string',
			value: 'transaction-amount'
		},
		{
			type: 'string',
			value: 'transaction-currency'
		},
		{
			type: 'string',
			value: 'url'
		},
		{
			type: 'string',
			value: 'username'
		}
	]
};
