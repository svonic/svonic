<script lang="ts">
	import { RangeSlider } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { RangeSlider } from '@svonic/core';
<\/script>

<RangeSlider
	color="dark"
	dualKnobs="{true}"
	pin="{true}"
	value="{{ lower: 20, upper: 40 }}"
/>
`;
</script>

<RangeSlider
	color="dark"
	dualKnobs="{true}"
	pin="{true}"
	value="{{ lower: 20, upper: 40 }}"
	{...$$restProps}
/>
