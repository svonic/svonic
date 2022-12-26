<script lang="ts">
	import { Button } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Button } from '@svonic/core';
<\/script>

<Button color="primary" size="default">Default</Button>
<Button color="success" size="large">Large</Button>
<Button color="danger" size="small">Small</Button>
`;
</script>

<Button
	color="primary"
	size="default"
	{...$$restProps}>Default</Button
>
<Button
	color="success"
	size="large"
	{...$$restProps}>Large</Button
>
<Button
	color="danger"
	size="small"
	{...$$restProps}>Small</Button
>
