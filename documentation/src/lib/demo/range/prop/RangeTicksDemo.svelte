<script lang="ts">
	import { Range } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Range } from '@svonic/core';
<\/script>

<Range
	color="primary"
	dualKnobs="{true}"
	max="{500}"
	min="{100}"
	pin="{true}"
	snaps="{true}"
	step="{10}"
	ticks="{true}"
	value="{{ lower: 200, upper: 300 }}"
/>
`;
</script>

<Range
	color="primary"
	dualKnobs="{true}"
	max="{500}"
	min="{100}"
	pin="{true}"
	snaps="{true}"
	step="{10}"
	ticks="{true}"
	value="{{ lower: 200, upper: 300 }}"
	{...$$restProps}
/>
