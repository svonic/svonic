<script lang="ts">
	import { Range } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Range } from '@svonic/core';
<\/script>

<Range
	color="dark"
	dualKnobs="{true}"
	pin="{true}"
	value="{{ lower: 20, upper: 40 }}"
/>
`;
</script>

<Range
	color="dark"
	dualKnobs="{true}"
	pin="{true}"
	value="{{ lower: 20, upper: 40 }}"
	{...$$restProps}
/>
