<script lang="ts">
	import { Range } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Range } from '@svonic/core';
<\/script>

<Range
	color="success"
	dualKnobs="{true}"
	max="{2000}"
	min="{1000}"
	pin="{true}"
	step="{100}"
	value="{{ lower: 1200, upper: 1400 }}"
/>
`;
</script>

<Range
	color="success"
	dualKnobs="{true}"
	max="{2000}"
	min="{1000}"
	pin="{true}"
	step="{100}"
	value="{{ lower: 1200, upper: 1400 }}"
	{...$$restProps}
/>
