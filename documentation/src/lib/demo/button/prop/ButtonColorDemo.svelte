<script lang="ts">
	import { Button } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Button } from '@svonic/core';
<\/script>

<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="tertiary">Tertiary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="light">Light</Button>
<Button color="medium">Medium</Button>
<Button color="dark">Dark</Button>
`;
</script>

<Button
	color="primary"
	{...$$restProps}>Primary</Button
>
<Button
	color="secondary"
	{...$$restProps}>Secondary</Button
>
<Button
	color="tertiary"
	{...$$restProps}>Tertiary</Button
>
<Button
	color="success"
	{...$$restProps}>Success</Button
>
<Button
	color="warning"
	{...$$restProps}>Warning</Button
>
<Button
	color="danger"
	{...$$restProps}>Danger</Button
>
<Button
	color="light"
	{...$$restProps}>Light</Button
>
<Button
	color="medium"
	{...$$restProps}>Medium</Button
>
<Button
	color="dark"
	{...$$restProps}>Dark</Button
>
