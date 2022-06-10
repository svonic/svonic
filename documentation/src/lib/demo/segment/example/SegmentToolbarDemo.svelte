<script lang="ts">
	import { Ionicon, Segment, SegmentButton, Toolbar } from '@svonic/core';
	import { bookmark, camera } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Ionicon, Segment, SegmentButton, Toolbar } from '@svonic/core';
	import { bookmark, camera } from 'ionicons/icons/index.js';
<\/script>

<Toolbar>
	<Segment value="camera">
		<SegmentButton value="camera">
			<Ionicon icon="{camera}" />
		</SegmentButton>
		<SegmentButton value="bookmark">
			<Ionicon icon="{bookmark}" />
		</SegmentButton>
	</Segment>
</Toolbar>
`;
</script>

<Toolbar {...$$restProps}>
	<Segment value="camera">
		<SegmentButton value="camera">
			<Ionicon icon="{camera}" />
		</SegmentButton>
		<SegmentButton value="bookmark">
			<Ionicon icon="{bookmark}" />
		</SegmentButton>
	</Segment>
</Toolbar>
