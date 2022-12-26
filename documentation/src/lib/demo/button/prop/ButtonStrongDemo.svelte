<script lang="ts">
	import { Button } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Button } from '@svonic/core';
<\/script>

<Button color="primary" strong="{true}">Strong</Button>
<Button color="success" strong="{false}">Default</Button>
`;
</script>

<Button
	color="primary"
	strong="{true}"
	{...$$restProps}>Strong</Button
>
<Button
	color="success"
	strong="{false}"
	{...$$restProps}>Default</Button
>
