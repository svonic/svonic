<script lang="ts">
	import { Icon, Item, List, ListHeader, Range } from '@svonic/core';
	import { brush, contrast, sunny, thermometer } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Icon, Item, List, ListHeader, Range } from '@svonic/core';
	import { brush, contrast, sunny, thermometer } from 'ionicons/icons/index.js';
<\/script>

<List>
	<ListHeader>Adjust Display</ListHeader>

	<Item>
		<Range value="{20}">
			<Icon icon="{sunny}" size="small" slot="start" />
			<Icon icon="{sunny}" slot="end" />
		</Range>
	</Item>

	<Item>
		<Range color="secondary" max="{200}" min="{-200}" pin="{true}">
			<Icon icon="{contrast}" size="small" slot="start" />
			<Icon icon="{contrast}" slot="end" />
		</Range>
	</Item>

	<Item>
		<Range color="dark" dualKnobs="{true}" pin="{true}">
			<Icon icon="{brush}" size="small" slot="start" />
			<Icon icon="{brush}" slot="end" />
		</Range>
	</Item>

	<Item>
		<Range
			color="danger"
			max="{2000}"
			min="{1000}"
			step="{100}"
			snaps="{true}"
			value="{1400}"
		>
			<Icon color="danger" icon="{thermometer}" size="small" slot="start" />
			<Icon color="danger" icon="{thermometer}" slot="end" />
		</Range>
	</Item>
</List>
/>
`;
</script>

<List {...$$restProps}>
	<ListHeader>Adjust Display</ListHeader>

	<Item>
		<Range value="{20}">
			<Icon
				icon="{sunny}"
				size="small"
				slot="start"
			/>
			<Icon
				icon="{sunny}"
				slot="end"
			/>
		</Range>
	</Item>

	<Item>
		<Range
			color="secondary"
			max="{200}"
			min="{-200}"
			pin="{true}"
		>
			<Icon
				icon="{contrast}"
				size="small"
				slot="start"
			/>
			<Icon
				icon="{contrast}"
				slot="end"
			/>
		</Range>
	</Item>

	<Item>
		<Range
			color="dark"
			dualKnobs="{true}"
			pin="{true}"
		>
			<Icon
				icon="{brush}"
				size="small"
				slot="start"
			/>
			<Icon
				icon="{brush}"
				slot="end"
			/>
		</Range>
	</Item>

	<Item>
		<Range
			color="danger"
			max="{2000}"
			min="{1000}"
			step="{100}"
			snaps="{true}"
			value="{1400}"
		>
			<Icon
				color="danger"
				icon="{thermometer}"
				size="small"
				slot="start"
			/>
			<Icon
				color="danger"
				icon="{thermometer}"
				slot="end"
			/>
		</Range>
	</Item>
</List>
