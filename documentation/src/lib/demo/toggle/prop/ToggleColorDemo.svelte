<script lang="ts">
	import { Item, Label, List, Toggle } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Item, Label, List, Toggle } from '@svonic/core';
<\/script>

<List>
	<Item>
		<Label>Primary</Label>
		<Toggle checked="{true}" color="primary" name="primary" toSlot="start" />
	</Item>

	<Item>
		<Label>Secondary</Label>
		<Toggle checked="{true}" color="secondary" name="secondary" toSlot="start" />
	</Item>

	<Item>
		<Label>Tertiary</Label>
		<Toggle checked="{true}" color="tertiary" name="tertiary" toSlot="start" />
	</Item>

	<Item>
		<Label>Success</Label>
		<Toggle checked="{true}" color="success" name="success" toSlot="start" />
	</Item>

	<Item>
		<Label>Warning</Label>
		<Toggle checked="{true}" color="warning" name="warning" toSlot="start" />
	</Item>

	<Item>
		<Label>Danger</Label>
		<Toggle checked="{true}" color="danger" name="danger" toSlot="start" />
	</Item>

	<Item>
		<Label>Light</Label>
		<Toggle checked="{true}" color="light" name="light" toSlot="start" />
	</Item>

	<Item>
		<Label>Medium</Label>
		<Toggle checked="{true}" color="medium" name="medium" toSlot="start" />
	</Item>

	<Item>
		<Label>Dark</Label>
		<Toggle checked="{true}" color="dark" name="dark" toSlot="start" />
	</Item>
</List>
`;
</script>

<List {...$$restProps}>
	<Item>
		<Label>Primary</Label>
		<Toggle
			checked="{true}"
			color="primary"
			name="primary"
			toSlot="start"
		/>
	</Item>

	<Item>
		<Label>Secondary</Label>
		<Toggle
			checked="{true}"
			color="secondary"
			name="secondary"
			toSlot="start"
		/>
	</Item>

	<Item>
		<Label>Tertiary</Label>
		<Toggle
			checked="{true}"
			color="tertiary"
			name="tertiary"
			toSlot="start"
		/>
	</Item>

	<Item>
		<Label>Success</Label>
		<Toggle
			checked="{true}"
			color="success"
			name="success"
			toSlot="start"
		/>
	</Item>

	<Item>
		<Label>Warning</Label>
		<Toggle
			checked="{true}"
			color="warning"
			name="warning"
			toSlot="start"
		/>
	</Item>

	<Item>
		<Label>Danger</Label>
		<Toggle
			checked="{true}"
			color="danger"
			name="danger"
			toSlot="start"
		/>
	</Item>

	<Item>
		<Label>Light</Label>
		<Toggle
			checked="{true}"
			color="light"
			name="light"
			toSlot="start"
		/>
	</Item>

	<Item>
		<Label>Medium</Label>
		<Toggle
			checked="{true}"
			color="medium"
			name="medium"
			toSlot="start"
		/>
	</Item>

	<Item>
		<Label>Dark</Label>
		<Toggle
			checked="{true}"
			color="dark"
			name="dark"
			toSlot="start"
		/>
	</Item>
</List>
