<script lang="ts">
	import { Title, Toolbar } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Title, Toolbar } from '@svonic/core';
<\/script>

<Toolbar color="primary">
	<Title>Default Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title size="large">Large Title</Title>
</Toolbar>

<Toolbar color="dark">
	<Title size="small">Small Title</Title>
</Toolbar>
`;
</script>

<Toolbar
	color="primary"
	{...$$restProps}
>
	<Title>Default Title</Title>
</Toolbar>

<Toolbar
	color="light"
	{...$$restProps}
>
	<Title size="large">Large Title</Title>
</Toolbar>

<Toolbar
	color="dark"
	{...$$restProps}
>
	<Title size="small">Small Title</Title>
</Toolbar>
