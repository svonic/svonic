<script lang="ts">
	import { RangeSlider } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { RangeSlider } from '@svonic/core';
<\/script>

<RangeSlider
	color="primary"
	dualKnobs="{true}"
	value="{{ lower: 20, upper: 40 }}"
/>
`;
</script>

<RangeSlider
	color="primary"
	dualKnobs="{true}"
	value="{{ lower: 20, upper: 40 }}"
	{...$$restProps}
/>
