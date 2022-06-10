<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';
<\/script>

<Segment value="paid">
	<SegmentButton value="paid">
		<Label>Paid</Label>
	</SegmentButton>
	<SegmentButton value="free">
		<Label>Free</Label>
	</SegmentButton>
	<SegmentButton disabled="{true}" value="top">
		<Label>Top</Label>
	</SegmentButton>
</Segment>
`;
</script>

<Segment value="paid" {...$$restProps}>
	<SegmentButton value="paid">
		<Label>Paid</Label>
	</SegmentButton>
	<SegmentButton value="free">
		<Label>Free</Label>
	</SegmentButton>
	<SegmentButton disabled="{true}" value="top">
		<Label>Top</Label>
	</SegmentButton>
</Segment>
