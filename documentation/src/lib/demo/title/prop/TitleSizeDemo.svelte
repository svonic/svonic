<script lang="ts">
	import { Title, Toolbar } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Title, Toolbar } from '@svonic/core';
<\/script>

<Toolbar color="primary">
	<Title size="small">Small Title above a Default Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title>Default Title</Title>
</Toolbar>

<Toolbar color="dark">
	<Title size="large">Large Title</Title>
</Toolbar>
`;
</script>

<Toolbar color="primary" {...$$restProps}>
	<Title size="small">Small Title above a Default Title</Title>
</Toolbar>

<Toolbar color="light" {...$$restProps}>
	<Title>Default Title</Title>
</Toolbar>

<Toolbar color="dark" {...$$restProps}>
	<Title size="large">Large Title</Title>
</Toolbar>
