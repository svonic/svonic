<script lang="ts">
	import { Range } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Range } from '@svonic/core';
<\/script>

<Range
	color="danger"
	dualKnobs="{true}"
	snaps="{true}"
	value="{{ lower: 20, upper: 40 }}"
/>
`;
</script>

<Range
	color="danger"
	dualKnobs="{true}"
	snaps="{true}"
	value="{{ lower: 20, upper: 40 }}"
	{...$$restProps}
/>
