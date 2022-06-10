<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';
<\/script>

<Segment value="1">
	<SegmentButton value="1">
		<Label>Item One</Label>
	</SegmentButton>
	<SegmentButton value="2">
		<Label>Item Two</Label>
	</SegmentButton>
	<SegmentButton value="3">
		<Label>Item Three</Label>
	</SegmentButton>
</Segment>
`;
</script>

<Segment value="1" {...$$restProps}>
	<SegmentButton value="1">
		<Label>Item One</Label>
	</SegmentButton>
	<SegmentButton value="2">
		<Label>Item Two</Label>
	</SegmentButton>
	<SegmentButton value="3">
		<Label>Item Three</Label>
	</SegmentButton>
</Segment>
