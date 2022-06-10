<script lang="ts">
	import { ProgressBar } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { ProgressBar } from '@svonic/core';
<\/script>

<ProgressBar color="primary" value="{0.5}" />
<ProgressBar color="secondary" value="{0.5}" />
<ProgressBar color="tertiary" value="{0.5}" />
<ProgressBar color="success" value="{0.5}" />
<ProgressBar color="warning" value="{0.5}" />
<ProgressBar color="danger" value="{0.5}" />
<ProgressBar color="light" value="{0.5}" />
<ProgressBar color="medium" value="{0.5}" />
<ProgressBar color="dark" value="{0.5}" />
`;
</script>

<div class="flex flex-col gap-8">
	<ProgressBar color="primary" value="{0.5}" {...$$restProps} />
	<ProgressBar color="secondary" value="{0.5}" {...$$restProps} />
	<ProgressBar color="tertiary" value="{0.5}" {...$$restProps} />
	<ProgressBar color="success" value="{0.5}" {...$$restProps} />
	<ProgressBar color="warning" value="{0.5}" {...$$restProps} />
	<ProgressBar color="danger" value="{0.5}" {...$$restProps} />
	<ProgressBar color="light" value="{0.5}" {...$$restProps} />
	<ProgressBar color="medium" value="{0.5}" {...$$restProps} />
	<ProgressBar color="dark" value="{0.5}" {...$$restProps} />
</div>
