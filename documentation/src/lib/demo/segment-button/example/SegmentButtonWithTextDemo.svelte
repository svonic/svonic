<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';
<\/script>

<Segment>
	<SegmentButton>
		<Label>Friends</Label>
	</SegmentButton>
	<SegmentButton>
		<Label>Enemies</Label>
	</SegmentButton>
</Segment>
`;
</script>

<Segment {...$$restProps}>
	<SegmentButton>
		<Label>Friends</Label>
	</SegmentButton>
	<SegmentButton>
		<Label>Enemies</Label>
	</SegmentButton>
</Segment>
