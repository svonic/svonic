<script lang="ts">
	import { Chip, Label } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Chip, Label } from '@svonic/core';
<\/script>

<Chip disabled="{true}">
	<Label>Disabled Chip</Label>
</Chip>
`;
</script>

<Chip disabled="{true}" {...$$restProps}>
	<Label>Disabled Chip</Label>
</Chip>
