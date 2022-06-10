<script lang="ts">
	import { Button, Icon } from '@svonic/core';
	import { star } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Button, Icon } from '@svonic/core';
	import { star } from 'ionicons/icons/index.js';
<\/script>

<Button>
	<Icon icon="{star}" toSlot="start" />
	Left Icon
</Button>

<Button>
	Right Icon
	<Icon icon="{star}" toSlot="end" />
</Button>

<Button>
	<Icon icon="{star}" toSlot="icon-only" />
</Button>
`;
</script>

<Button {...$$restProps}>
	<Icon icon="{star}" toSlot="start" />
	Left Icon
</Button>

<Button {...$$restProps}>
	Right Icon
	<Icon icon="{star}" toSlot="end" />
</Button>

<Button {...$$restProps}>
	<Icon icon="{star}" toSlot="icon-only" />
</Button>
