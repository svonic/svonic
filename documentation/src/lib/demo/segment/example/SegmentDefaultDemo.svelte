<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';
<\/script>

<Segment value="friends">
	<SegmentButton value="friends">
		<Label>Friends</Label>
	</SegmentButton>
	<SegmentButton value="enemies">
		<Label>Enemies</Label>
	</SegmentButton>
</Segment>
`;
</script>

<Segment value="friends" {...$$restProps}>
	<SegmentButton value="friends">
		<Label>Friends</Label>
	</SegmentButton>
	<SegmentButton value="enemies">
		<Label>Enemies</Label>
	</SegmentButton>
</Segment>
