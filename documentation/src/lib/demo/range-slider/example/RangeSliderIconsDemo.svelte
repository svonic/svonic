<script lang="ts">
	import { Icon, Item, List, ListHeader, RangeSlider } from '@svonic/core';
	import { brush, contrast, sunny, thermometer } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Icon, Item, List, ListHeader, RangeSlider } from '@svonic/core';
	import { brush, contrast, sunny, thermometer } from 'ionicons/icons/index.js';
<\/script>

<List>
	<ListHeader>Adjust Display</ListHeader>

	<Item>
		<RangeSlider value="{20}">
			<Icon icon="{sunny}" size="small" toSlot="start" />
			<Icon icon="{sunny}" toSlot="end" />
		</RangeSlider>
	</Item>

	<Item>
		<RangeSlider color="secondary" max="{200}" min="{-200}" pin="{true}">
			<Icon icon="{contrast}" size="small" toSlot="start" />
			<Icon icon="{contrast}" toSlot="end" />
		</RangeSlider>
	</Item>

	<Item>
		<RangeSlider color="dark" dualKnobs="{true}" pin="{true}">
			<Icon icon="{brush}" size="small" toSlot="start" />
			<Icon icon="{brush}" toSlot="end" />
		</RangeSlider>
	</Item>

	<Item>
		<RangeSlider
			color="danger"
			max="{2000}"
			min="{1000}"
			step="{100}"
			snaps="{true}"
			value="{1400}"
		>
			<Icon color="danger" icon="{thermometer}" size="small" toSlot="start" />
			<Icon color="danger" icon="{thermometer}" toSlot="end" />
		</RangeSlider>
	</Item>
</List>
/>
`;
</script>

<List {...$$restProps}>
	<ListHeader>Adjust Display</ListHeader>

	<Item>
		<RangeSlider value="{20}">
			<Icon icon="{sunny}" size="small" toSlot="start" />
			<Icon icon="{sunny}" toSlot="end" />
		</RangeSlider>
	</Item>

	<Item>
		<RangeSlider color="secondary" max="{200}" min="{-200}" pin="{true}">
			<Icon icon="{contrast}" size="small" toSlot="start" />
			<Icon icon="{contrast}" toSlot="end" />
		</RangeSlider>
	</Item>

	<Item>
		<RangeSlider color="dark" dualKnobs="{true}" pin="{true}">
			<Icon icon="{brush}" size="small" toSlot="start" />
			<Icon icon="{brush}" toSlot="end" />
		</RangeSlider>
	</Item>

	<Item>
		<RangeSlider
			color="danger"
			max="{2000}"
			min="{1000}"
			step="{100}"
			snaps="{true}"
			value="{1400}"
		>
			<Icon color="danger" icon="{thermometer}" size="small" toSlot="start" />
			<Icon color="danger" icon="{thermometer}" toSlot="end" />
		</RangeSlider>
	</Item>
</List>
