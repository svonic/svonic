<script lang="ts">
	import { Item, Label, List, Thumbnail } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Item, Label, List, Thumbnail } from '@svonic/core';
<\/script>

<List>
	<Item>
		<Thumbnail toSlot="start">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>Lorem ipsum</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="start">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>
			<h3>Lorem ipsum</h3>
			<p>dolor sit amet</p>
		</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="start">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>
			<h3>Lorem ipsum</h3>
			<p>dolor sit amet</p>
			<p>consectetur adipiscing elit. Duis ut urna neque.</p>
		</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="end">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>Lorem ipsum</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="end">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>
			<h3>Lorem ipsum</h3>
			<p>dolor sit amet</p>
		</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="end">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>
			<h3>Lorem ipsum</h3>
			<p>dolor sit amet</p>
			<p>consectetur adipiscing elit. Duis ut urna neque.</p>
		</Label>
	</Item>
</List>
`;
</script>

<List {...$$restProps}>
	<Item>
		<Thumbnail toSlot="start">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>Lorem ipsum</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="start">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>
			<h3>Lorem ipsum</h3>
			<p>dolor sit amet</p>
		</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="start">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>
			<h3>Lorem ipsum</h3>
			<p>dolor sit amet</p>
			<p>consectetur adipiscing elit. Duis ut urna neque.</p>
		</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="end">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>Lorem ipsum</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="end">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>
			<h3>Lorem ipsum</h3>
			<p>dolor sit amet</p>
		</Label>
	</Item>
	<Item>
		<Thumbnail toSlot="end">
			<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
		</Thumbnail>
		<Label>
			<h3>Lorem ipsum</h3>
			<p>dolor sit amet</p>
			<p>consectetur adipiscing elit. Duis ut urna neque.</p>
		</Label>
	</Item>
</List>
