<script lang="ts">
	import { ProgressBar } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { ProgressBar } from '@svonic/core';
<\/script>

<ProgressBar reversed="{true}" type="indeterminate" />
`;
</script>

<ProgressBar
	reversed="{true}"
	type="indeterminate"
	{...$$restProps}
/>
