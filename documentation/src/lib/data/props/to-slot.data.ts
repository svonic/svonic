import type { ComponentPropAPI } from '$lib/types/component-data-api.type';

export const toSlot: ComponentPropAPI = {
	defaultValue: 'undefined',
	description: {
		en: `Slot work around.
	<p class="font-medium mt-2">
	 See this open Svelte issue. <a class="hover:underline text-blue-500" href="https://github.com/sveltejs/svelte/issues/1689" target="_blanket">#1689</a>, </br>
	 <a class="hover:underline" href="https://github.com/sveltejs/svelte/issues/1689" target="_blanket">Slotted content for Web Component nested inside of a Svelte component is not applied to the Web Component</a>
	 </p>
	 `
	},
	hasDemo: false,
	isSpecial: true,
	name: 'toSlot',
	valueList: [
		{
			type: 'string',
			value: 'bottom'
		},
		{
			type: 'string',
			value: 'content'
		},
		{
			type: 'string',
			value: 'end'
		},
		{
			type: 'string',
			value: 'error'
		},
		{
			type: 'string',
			value: 'header'
		},
		{
			type: 'string',
			value: 'helper'
		},
		{
			type: 'string',
			value: 'icon-only'
		},
		{
			type: 'string',
			value: 'primary'
		},
		{
			type: 'string',
			value: 'secondary'
		},
		{
			type: 'string',
			value: 'start'
		},
		{
			type: 'string',
			value: 'time-label'
		},
		{
			type: 'string',
			value: 'title'
		},
		{
			type: 'string',
			value: 'top'
		},
		{
			type: 'undefined',
			value: 'undefined'
		}
	]
};
