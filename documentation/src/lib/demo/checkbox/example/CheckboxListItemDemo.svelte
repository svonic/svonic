<script lang="ts">
	import { Checkbox, Item, Label, List, ListHeader } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Checkbox, Item, Label, List, ListHeader } from '@svonic/core';
<\/script>

<List>
	<ListHeader>Checkboxes in a List</ListHeader>
	<Item>
		<Label>Pepperoni</Label>
		<Checkbox checked="{true}" slot="end" value="pepperoni" />
	</Item>
	<Item>
		<Label>Sausage</Label>
		<Checkbox disabled="{true}" slot="end" value="sausage" />
	</Item>
	<Item>
		<Label>Mushrooms</Label>
		<Checkbox slot="end" value="mushrooms" />
	</Item>
</List>
`;
</script>

<List {...$$restProps}>
	<ListHeader>Checkboxes in a List</ListHeader>
	<Item>
		<Label>Pepperoni</Label>
		<Checkbox
			checked="{true}"
			slot="end"
			value="pepperoni"
		/>
	</Item>
	<Item>
		<Label>Sausage</Label>
		<Checkbox
			disabled="{true}"
			slot="end"
			value="sausage"
		/>
	</Item>
	<Item>
		<Label>Mushrooms</Label>
		<Checkbox
			slot="end"
			value="mushrooms"
		/>
	</Item>
</List>
