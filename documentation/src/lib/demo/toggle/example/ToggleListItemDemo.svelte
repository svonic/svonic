<script lang="ts">
	import { Item, Label, List, Toggle } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Item, Label, List, Toggle } from '@svonic/core';
<\/script>

<List>
	<Item>
		<Label>Pepperoni</Label>
		<Toggle checked="{true}" toSlot="end" value="pepperoni" />
	</Item>

	<Item>
		<Label>Sausage</Label>
		<Toggle disabled="{true}" toSlot="end" value="sausage" />
	</Item>

	<Item>
		<Label>Mushrooms</Label>
		<Toggle toSlot="end" value="mushrooms" />
	</Item>
</List>
`;
</script>

<List {...$$restProps}>
	<Item>
		<Label>Pepperoni</Label>
		<Toggle checked="{true}" toSlot="end" value="pepperoni" />
	</Item>

	<Item>
		<Label>Sausage</Label>
		<Toggle disabled="{true}" toSlot="end" value="sausage" />
	</Item>

	<Item>
		<Label>Mushrooms</Label>
		<Toggle toSlot="end" value="mushrooms" />
	</Item>
</List>
