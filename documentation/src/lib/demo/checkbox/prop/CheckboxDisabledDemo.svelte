<script lang="ts">
	import { Checkbox } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Checkbox } from '@svonic/core';
<\/script>

<div>
	<Checkbox disabled="{true}" /> Disabled
</div>
<div>
	<Checkbox disabled="{false}" /> Enabled
</div>
`;
</script>

<div>
	<Checkbox disabled="{true}" {...$$restProps} /> Disabled
</div>
<div>
	<Checkbox disabled="{false}" {...$$restProps} /> Enabled
</div>
