<script lang="ts">
	import type { ColorType, CssClassType, SegmentChangeEventDetail, ValueType } from '@svonic/core';
	import { Segment, Toolbar } from '@svonic/core';
	import { getContext } from 'svelte';
	import { key } from './context-tab';

	const { tabIndex } = getContext(key);

	let cssClass: CssClassType = undefined;

	export { cssClass as class };
	export let color: ColorType = 'primary';
	export let value: ValueType = undefined;

	$: value = $tabIndex;

	function tabSelected(event: CustomEvent<SegmentChangeEventDetail>) {
		const newTabIndex: number = parseInt(event.detail.value, 10);

		$tabIndex = newTabIndex;
	}
</script>

<Toolbar
	class="{cssClass}"
	color="{color}"
>
	<Segment
		value="{value}"
		on:ionChange="{tabSelected}"
	>
		<slot />
	</Segment>
</Toolbar>
