<script lang="ts">
	import { Item, Label, List, Radio, RadioGroup } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Item, Label, List, Radio, RadioGroup } from '@svonic/core';
<\/script>

<List>
	<RadioGroup allowEmptySelection="{true}" value="primary">
		<Item>
			<Label>Primary</Label>
			<Radio slot="start" color="primary" value="primary" />
		</Item>

		<Item>
			<Label>Secondary</Label>
			<Radio slot="start" color="secondary" value="secondary" />
		</Item>

		<Item>
			<Label>Tertiary</Label>
			<Radio slot="start" color="tertiary" value="tertiary" />
		</Item>

		<Item>
			<Label>Success</Label>
			<Radio slot="start" color="success" value="success" />
		</Item>

		<Item>
			<Label>Warning</Label>
			<Radio slot="start" color="warning" value="warning" />
		</Item>

		<Item>
			<Label>Danger</Label>
			<Radio slot="start" color="danger" value="danger" />
		</Item>

		<Item>
			<Label>Light</Label>
			<Radio slot="start" color="light" value="light" />
		</Item>

		<Item>
			<Label>Medium</Label>
			<Radio slot="start" color="medium" value="medium" />
		</Item>

		<Item>
			<Label>Dark</Label>
			<Radio slot="start" color="dark" value="dark" />
		</Item>
	</RadioGroup>
</List>
`;
</script>

<List {...$$restProps}>
	<RadioGroup
		allowEmptySelection="{true}"
		value="primary"
	>
		<Item>
			<Label>Primary</Label>
			<Radio
				slot="start"
				color="primary"
				value="primary"
			/>
		</Item>

		<Item>
			<Label>Secondary</Label>
			<Radio
				slot="start"
				color="secondary"
				value="secondary"
			/>
		</Item>

		<Item>
			<Label>Tertiary</Label>
			<Radio
				slot="start"
				color="tertiary"
				value="tertiary"
			/>
		</Item>

		<Item>
			<Label>Success</Label>
			<Radio
				slot="start"
				color="success"
				value="success"
			/>
		</Item>

		<Item>
			<Label>Warning</Label>
			<Radio
				slot="start"
				color="warning"
				value="warning"
			/>
		</Item>

		<Item>
			<Label>Danger</Label>
			<Radio
				slot="start"
				color="danger"
				value="danger"
			/>
		</Item>

		<Item>
			<Label>Light</Label>
			<Radio
				slot="start"
				color="light"
				value="light"
			/>
		</Item>

		<Item>
			<Label>Medium</Label>
			<Radio
				slot="start"
				color="medium"
				value="medium"
			/>
		</Item>

		<Item>
			<Label>Dark</Label>
			<Radio
				slot="start"
				color="dark"
				value="dark"
			/>
		</Item>
	</RadioGroup>
</List>
