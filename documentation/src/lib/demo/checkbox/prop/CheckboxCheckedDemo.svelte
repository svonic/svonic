<script lang="ts">
	import { Checkbox } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Checkbox } from '@svonic/core';
<\/script>

<Checkbox checked="{true}" /> Checked
`;
</script>

<Checkbox
	checked="{true}"
	{...$$restProps}
/> Checked
