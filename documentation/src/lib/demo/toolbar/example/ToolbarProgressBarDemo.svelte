<script lang="ts">
	import { ProgressBar, Title, Toolbar } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { ProgressBar, Title, Toolbar } from '@svonic/core';
<\/script>

<Toolbar color="light">
	<Title>Progress</Title>

	<ProgressBar type="indeterminate" value="{0.4}" />
</Toolbar>
`;
</script>

<Toolbar color="light" {...$$restProps}>
	<Title>Progress</Title>

	<ProgressBar type="indeterminate" value="{0.4}" />
</Toolbar>
