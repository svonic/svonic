<script lang="ts">
	import { Button, Icon } from '@svonic/core';
	import { star } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Button, Icon } from '@svonic/core';
	import { star } from 'ionicons/icons/index.js';
<\/script>

<Button>
	<Icon icon="{star}" slot="start" />
	Left Icon
</Button>

<Button>
	Right Icon
	<Icon icon="{star}" slot="end" />
</Button>

<Button>
	<Icon icon="{star}" slot="icon-only" />
</Button>
`;
</script>

<Button {...$$restProps}>
	<Icon
		icon="{star}"
		slot="start"
	/>
	Left Icon
</Button>

<Button {...$$restProps}>
	Right Icon
	<Icon
		icon="{star}"
		slot="end"
	/>
</Button>

<Button {...$$restProps}>
	<Icon
		icon="{star}"
		slot="icon-only"
	/>
</Button>
