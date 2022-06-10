<script lang="ts">
	import { Button } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Button } from '@svonic/core';
<\/script>

<Button color="primary" expand="block">Block</Button>
<Button color="success" expand="full">Full</Button>
`;
</script>

<Button color="primary" expand="block" {...$$restProps}>Block</Button>
<Button color="success" expand="full" {...$$restProps}>Full</Button>
