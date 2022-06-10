<script lang="ts">
	import { Label, List, ListHeader, ProgressBar } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Label, List, ListHeader, ProgressBar } from '@svonic/core';
<\/script>

<List>
	<ListHeader>
		<Label>Default</Label>
	</ListHeader>
	<ProgressBar type="determinate" value="{0.5}" />

	<ListHeader>
		<Label>Indeterminate</Label>
	</ListHeader>
	<ProgressBar type="indeterminate" />
</List>
`;
</script>

<List {...$$restProps}>
	<ListHeader>
		<Label>Default at 50%</Label>
	</ListHeader>
	<ProgressBar type="determinate" value="{0.5}" />

	<ListHeader>
		<Label>Indeterminate</Label>
	</ListHeader>
	<ProgressBar type="indeterminate" />
</List>
