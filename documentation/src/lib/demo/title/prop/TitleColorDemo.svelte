<script lang="ts">
	import { Title, Toolbar } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Title, Toolbar } from '@svonic/core';
<\/script>

<Toolbar color="light">
	<Title color="primary">Primary Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title color="secondary">Secondary Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title color="tertiary">Tertiary Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title color="success">Success Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title color="warning">Warning Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title color="danger">Danger Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title color="light">Light Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title color="medium">Medium Title</Title>
</Toolbar>

<Toolbar color="light">
	<Title color="dark">Dark Title</Title>
</Toolbar>
`;
</script>

<div class="flex flex-col gap-2">
	<Toolbar color="light" {...$$restProps}>
		<Title color="primary">Primary Title</Title>
	</Toolbar>

	<Toolbar color="light" {...$$restProps}>
		<Title color="secondary">Secondary Title</Title>
	</Toolbar>

	<Toolbar color="light" {...$$restProps}>
		<Title color="tertiary">Tertiary Title</Title>
	</Toolbar>

	<Toolbar color="light" {...$$restProps}>
		<Title color="success">Success Title</Title>
	</Toolbar>

	<Toolbar color="light" {...$$restProps}>
		<Title color="warning">Warning Title</Title>
	</Toolbar>

	<Toolbar color="light" {...$$restProps}>
		<Title color="danger">Danger Title</Title>
	</Toolbar>

	<Toolbar color="medium" {...$$restProps}>
		<Title color="light">Light Title</Title>
	</Toolbar>

	<Toolbar color="light" {...$$restProps}>
		<Title color="medium">Medium Title</Title>
	</Toolbar>

	<Toolbar color="light" {...$$restProps}>
		<Title color="dark">Dark Title</Title>
	</Toolbar>
</div>
