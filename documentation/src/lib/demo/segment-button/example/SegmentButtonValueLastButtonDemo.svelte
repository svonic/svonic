<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';
<\/script>

<Segment value="shared">
	<SegmentButton value="bookmarks">
		<Label>Bookmarks</Label>
	</SegmentButton>
	<SegmentButton value="reading">
		<Label>Reading List</Label>
	</SegmentButton>
	<SegmentButton value="shared">
		<Label>Shared Links</Label>
	</SegmentButton>
</Segment>
`;
</script>

<Segment value="shared" {...$$restProps}>
	<SegmentButton value="bookmarks">
		<Label>Bookmarks</Label>
	</SegmentButton>
	<SegmentButton value="reading">
		<Label>Reading List</Label>
	</SegmentButton>
	<SegmentButton value="shared">
		<Label>Shared Links</Label>
	</SegmentButton>
</Segment>
