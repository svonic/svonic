<script lang="ts">
	import { Button } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Button } from '@svonic/core';
<\/script>

<Button fill="clear">Clear</Button>
<Button fill="default">Default</Button>
<Button fill="outline">Outline</Button>
<Button fill="solid">Solid</Button>
`;
</script>

<Button fill="clear" {...$$restProps}>Clear</Button>
<Button fill="default" {...$$restProps}>Default</Button>
<Button fill="outline" {...$$restProps}>Outline</Button>
<Button fill="solid" {...$$restProps}>Solid</Button>
