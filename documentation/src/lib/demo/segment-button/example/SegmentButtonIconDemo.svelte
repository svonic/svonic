<script lang="ts">
	import { Ionicon, Label, List, ListHeader, Segment, SegmentButton } from '@svonic/core';
	import { call, heart, pin } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Ionicon, Label, List, ListHeader, Segment, SegmentButton } from '@svonic/core';
	import { call, heart, pin } from 'ionicons/icons/index.js';
<\/script>

<List>
	<ListHeader>Icon only</ListHeader>

	<Segment value="heart">
		<SegmentButton value="call">
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton value="heart">
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton value="pin">
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon top</ListHeader>

	<Segment value="2">
		<SegmentButton value="1">
			<Label>Item One</Label>
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton value="2">
			<Label>Item Two</Label>
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton value="3">
			<Label>Item Three</Label>
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon bottom</ListHeader>

	<Segment value="1">
		<SegmentButton value="1" layout="icon-bottom">
			<Ionicon icon="{call}" />
			<Label>Item One</Label>
		</SegmentButton>
		<SegmentButton value="2" layout="icon-bottom">
			<Ionicon icon="{heart}" />
			<Label>Item Two</Label>
		</SegmentButton>
		<SegmentButton value="3" layout="icon-bottom">
			<Ionicon icon="{pin}" />
			<Label>Item Three</Label>
		</SegmentButton>
	</Segment>

	<ListHeader>Icon start</ListHeader>

	<Segment value="1">
		<SegmentButton value="1" layout="icon-start">
			<Label>Item One</Label>
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton value="2" layout="icon-start">
			<Label>Item Two</Label>
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton value="3" layout="icon-start">
			<Label>Item Three</Label>
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon end</ListHeader>

	<Segment value="1">
		<SegmentButton value="1" layout="icon-end">
			<Ionicon icon="{call}" />
			<Label>Item One</Label>
		</SegmentButton>
		<SegmentButton value="2" disabled layout="icon-end">
			<Ionicon icon="{heart}" />
			<Label>Item Two</Label>
		</SegmentButton>
		<SegmentButton value="3" layout="icon-end">
			<Ionicon icon="{pin}" />
			<Label>Item Three</Label>
		</SegmentButton>
	</Segment>
</List>
`;
</script>

<List {...$$restProps}>
	<ListHeader>Icon only</ListHeader>

	<Segment value="heart">
		<SegmentButton value="call">
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton value="heart">
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton value="pin">
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon top</ListHeader>

	<Segment value="2">
		<SegmentButton value="1">
			<Label>Item One</Label>
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton value="2">
			<Label>Item Two</Label>
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton value="3">
			<Label>Item Three</Label>
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon bottom</ListHeader>

	<Segment value="1">
		<SegmentButton value="1" layout="icon-bottom">
			<Ionicon icon="{call}" />
			<Label>Item One</Label>
		</SegmentButton>
		<SegmentButton value="2" layout="icon-bottom">
			<Ionicon icon="{heart}" />
			<Label>Item Two</Label>
		</SegmentButton>
		<SegmentButton value="3" layout="icon-bottom">
			<Ionicon icon="{pin}" />
			<Label>Item Three</Label>
		</SegmentButton>
	</Segment>

	<ListHeader>Icon start</ListHeader>

	<Segment value="1">
		<SegmentButton value="1" layout="icon-start">
			<Label>Item One</Label>
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton value="2" layout="icon-start">
			<Label>Item Two</Label>
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton value="3" layout="icon-start">
			<Label>Item Three</Label>
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon end</ListHeader>

	<Segment value="1">
		<SegmentButton value="1" layout="icon-end">
			<Ionicon icon="{call}" />
			<Label>Item One</Label>
		</SegmentButton>
		<SegmentButton value="2" disabled layout="icon-end">
			<Ionicon icon="{heart}" />
			<Label>Item Two</Label>
		</SegmentButton>
		<SegmentButton value="3" layout="icon-end">
			<Ionicon icon="{pin}" />
			<Label>Item Three</Label>
		</SegmentButton>
	</Segment>
</List>
