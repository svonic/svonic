<script lang="ts">
	import { Ionicon, Segment, SegmentButton } from '@svonic/core';
	import { bookmark, camera } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Ionicon, Segment, SegmentButton } from '@svonic/core';
	import { bookmark, camera } from 'ionicons/icons/index.js';
<\/script>

<Segment>
	<SegmentButton value="camera">
		<Ionicon icon="{camera}" />
	</SegmentButton>
	<SegmentButton value="bookmark">
		<Ionicon icon="{bookmark}" />
	</SegmentButton>
</Segment>
`;
</script>

<Segment {...$$restProps}>
	<SegmentButton value="camera">
		<Ionicon icon="{camera}" />
	</SegmentButton>
	<SegmentButton value="bookmark">
		<Ionicon icon="{bookmark}" />
	</SegmentButton>
</Segment>
