<script lang="ts">
	import { Item, Label, List, ListHeader, Radio, RadioGroup } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Item, Label, List, ListHeader, Radio, RadioGroup } from '@svonic/core';
<\/script>

<List>
	<RadioGroup>
		<ListHeader>
			<Label>Auto Manufacturers</Label>
		</ListHeader>

		<Item>
			<Label>Cord</Label>
			<Radio value="cord" />
		</Item>

		<Item>
			<Label>Duesenberg</Label>
			<Radio value="duesenberg" />
		</Item>

		<Item>
			<Label>Hudson</Label>
			<Radio value="hudson" />
		</Item>

		<Item>
			<Label>Packard</Label>
			<Radio value="packard" />
		</Item>

		<Item>
			<Label>Studebaker</Label>
			<Radio value="studebaker" />
		</Item>
	</RadioGroup>
</List>
`;
</script>

<List {...$$restProps}>
	<RadioGroup>
		<ListHeader>
			<Label>Auto Manufacturers</Label>
		</ListHeader>

		<Item>
			<Label>Cord</Label>
			<Radio value="cord" />
		</Item>

		<Item>
			<Label>Duesenberg</Label>
			<Radio value="duesenberg" />
		</Item>

		<Item>
			<Label>Hudson</Label>
			<Radio value="hudson" />
		</Item>

		<Item>
			<Label>Packard</Label>
			<Radio value="packard" />
		</Item>

		<Item>
			<Label>Studebaker</Label>
			<Radio value="studebaker" />
		</Item>
	</RadioGroup>
</List>
