<script lang="ts">
	import { Toolbar } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Toolbar } from '@svonic/core';
<\/script>

<Toolbar color="primary">Primary</Toolbar>
<Toolbar color="secondary">Secondary</Toolbar>
<Toolbar color="tertiary">Tertiary</Toolbar>
<Toolbar color="success">Success</Toolbar>
<Toolbar color="warning">Warning</Toolbar>
<Toolbar color="danger">Danger</Toolbar>
<Toolbar color="light">Light</Toolbar>
<Toolbar color="medium">Medium</Toolbar>
<Toolbar color="dark">Dark</Toolbar>
`;
</script>

<Toolbar color="primary" {...$$restProps}>Primary</Toolbar>
<Toolbar color="secondary" {...$$restProps}>Secondary</Toolbar>
<Toolbar color="tertiary" {...$$restProps}>Tertiary</Toolbar>
<Toolbar color="success" {...$$restProps}>Success</Toolbar>
<Toolbar color="warning" {...$$restProps}>Warning</Toolbar>
<Toolbar color="danger" {...$$restProps}>Danger</Toolbar>
<Toolbar color="light" {...$$restProps}>Light</Toolbar>
<Toolbar color="medium" {...$$restProps}>Medium</Toolbar>
<Toolbar color="dark" {...$$restProps}>Dark</Toolbar>
