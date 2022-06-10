<script lang="ts">
	import { Segment, SegmentButton, Toolbar } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Segment, SegmentButton, Toolbar } from '@svonic/core';
<\/script>

<Toolbar color="light">
	<Segment color="primary" value="all">
		<SegmentButton value="all">All</SegmentButton>
		<SegmentButton value="favorites">Favorites</SegmentButton>
	</Segment>
</Toolbar>
`;
</script>

<Toolbar color="light" {...$$restProps}>
	<Segment color="primary" value="all">
		<SegmentButton value="all">All</SegmentButton>
		<SegmentButton value="favorites">Favorites</SegmentButton>
	</Segment>
</Toolbar>
