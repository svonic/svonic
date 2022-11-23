<script lang="ts">
	import { Button } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Button } from '@svonic/core';
<\/script>

<Button disabled="{true}">Disabled</Button>
<Button disabled="{false}">Enabled</Button>
`;
</script>

<Button
	disabled="{true}"
	{...$$restProps}>Disabled</Button
>
<Button
	disabled="{false}"
	{...$$restProps}>Enabled</Button
>
