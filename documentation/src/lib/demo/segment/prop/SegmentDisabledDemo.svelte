<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Label, Segment, SegmentButton } from '@svonic/core';
<\/script>

<Segment disabled="{true}" value="sunny">
	<SegmentButton value="sunny">
		<Label>Sunny</Label>
	</SegmentButton>
	<SegmentButton value="rainy">
		<Label>Rainy</Label>
	</SegmentButton>
</Segment>
`;
</script>

<Segment disabled="{true}" value="sunny" {...$$restProps}>
	<SegmentButton value="sunny">
		<Label>Sunny</Label>
	</SegmentButton>
	<SegmentButton value="rainy">
		<Label>Rainy</Label>
	</SegmentButton>
</Segment>
