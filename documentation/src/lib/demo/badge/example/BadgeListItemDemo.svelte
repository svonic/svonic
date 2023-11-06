<script lang="ts">
	import { Badge, Item, Label, List, ListHeader } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Badge, Item, Label, List, ListHeader } from '@svonic/core';
<\/script>

<List>
	<ListHeader>Badges</ListHeader>
	<Item>
		<Label>Followers</Label>
		<Badge slot="end">22k</Badge>
	</Item>
	<Item>
		<Label>Likes</Label>
		<Badge color="secondary" slot="end">118k</Badge>
	</Item>
	<Item>
		<Label>Stars</Label>
		<Badge color="tertiary" slot="end">34k</Badge>
	</Item>
	<Item>
		<Label>Completed</Label>
		<Badge color="success" slot="end">80</Badge>
	</Item>
	<Item>
		<Label>Warnings</Label>
		<Badge color="warning" slot="end">70</Badge>
	</Item>
	<Item>
		<Label>Notifications</Label>
		<Badge color="danger" slot="end">1000</Badge>
	</Item>
	<Item>
		<Label>Unread</Label>
		<Badge color="light" slot="end">24</Badge>
	</Item>
	<Item>
		<Label>Drafts</Label>
		<Badge color="medium" slot="end">14</Badge>
	</Item>
	<Item>
		<Label>Deleted</Label>
		<Badge color="dark" slot="end">4</Badge>
	</Item>
</List>
`;
</script>

<List {...$$restProps}>
	<ListHeader>Badges</ListHeader>
	<Item>
		<Label>Followers</Label>
		<Badge slot="end">22k</Badge>
	</Item>
	<Item>
		<Label>Likes</Label>
		<Badge
			color="secondary"
			slot="end">118k</Badge
		>
	</Item>
	<Item>
		<Label>Stars</Label>
		<Badge
			color="tertiary"
			slot="end">34k</Badge
		>
	</Item>
	<Item>
		<Label>Completed</Label>
		<Badge
			color="success"
			slot="end">80</Badge
		>
	</Item>
	<Item>
		<Label>Warnings</Label>
		<Badge
			color="warning"
			slot="end">70</Badge
		>
	</Item>
	<Item>
		<Label>Notifications</Label>
		<Badge
			color="danger"
			slot="end">1000</Badge
		>
	</Item>
	<Item>
		<Label>Unread</Label>
		<Badge
			color="light"
			slot="end">24</Badge
		>
	</Item>
	<Item>
		<Label>Drafts</Label>
		<Badge
			color="medium"
			slot="end">14</Badge
		>
	</Item>
	<Item>
		<Label>Deleted</Label>
		<Badge
			color="dark"
			slot="end">4</Badge
		>
	</Item>
</List>
