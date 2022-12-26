<script lang="ts">
	import { Ionicon, Label, List, ListHeader, Segment, SegmentButton } from '@svonic/core';
	import { call, heart, pin } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Ionicon, Label, List, ListHeader, Segment, SegmentButton } from '@svonic/core';
	import { call, heart, pin } from 'ionicons/icons/index.js';
<\/script>

<List>
	<ListHeader>Icon top</ListHeader>

	<Segment color="tertiary" value="favorite">
		<SegmentButton value="call">
			<Label>Call</Label>
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton value="favorite">
			<Label>Favorite</Label>
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton value="map">
			<Label>Map</Label>
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon bottom</ListHeader>

	<Segment color="success" value="call">
		<SegmentButton value="call" layout="icon-bottom">
			<Ionicon icon="{call}" />
			<Label>Call</Label>
		</SegmentButton>
		<SegmentButton value="favorite" layout="icon-bottom">
			<Ionicon icon="{heart}" />
			<Label>Favorite</Label>
		</SegmentButton>
		<SegmentButton value="map" layout="icon-bottom">
			<Ionicon icon="{pin}" />
			<Label>Map</Label>
		</SegmentButton>
	</Segment>

	<ListHeader>Icon start</ListHeader>

	<Segment color="warning" value="call">
		<SegmentButton value="call" layout="icon-start">
			<Label>Call</Label>
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton value="favorite" layout="icon-start">
			<Label>Favorite</Label>
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton value="map" layout="icon-start">
			<Label>Map</Label>
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon end</ListHeader>

	<Segment color="danger" value="map">
		<SegmentButton value="call" layout="icon-end">
			<Ionicon icon="{call}" />
			<Label>Call</Label>
		</SegmentButton>
		<SegmentButton value="favorite" layout="icon-end">
			<Ionicon icon="{heart}" />
			<Label>Favorite</Label>
		</SegmentButton>
		<SegmentButton value="map" layout="icon-end">
			<Ionicon icon="{pin}" />
			<Label>Map</Label>
		</SegmentButton>
	</Segment>
</List>
`;
</script>

<List {...$$restProps}>
	<ListHeader>Icon top</ListHeader>

	<Segment
		color="tertiary"
		value="favorite"
	>
		<SegmentButton value="call">
			<Label>Call</Label>
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton value="favorite">
			<Label>Favorite</Label>
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton value="map">
			<Label>Map</Label>
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon bottom</ListHeader>

	<Segment
		color="success"
		value="call"
	>
		<SegmentButton
			value="call"
			layout="icon-bottom"
		>
			<Ionicon icon="{call}" />
			<Label>Call</Label>
		</SegmentButton>
		<SegmentButton
			value="favorite"
			layout="icon-bottom"
		>
			<Ionicon icon="{heart}" />
			<Label>Favorite</Label>
		</SegmentButton>
		<SegmentButton
			value="map"
			layout="icon-bottom"
		>
			<Ionicon icon="{pin}" />
			<Label>Map</Label>
		</SegmentButton>
	</Segment>

	<ListHeader>Icon start</ListHeader>

	<Segment
		color="warning"
		value="call"
	>
		<SegmentButton
			value="call"
			layout="icon-start"
		>
			<Label>Call</Label>
			<Ionicon icon="{call}" />
		</SegmentButton>
		<SegmentButton
			value="favorite"
			layout="icon-start"
		>
			<Label>Favorite</Label>
			<Ionicon icon="{heart}" />
		</SegmentButton>
		<SegmentButton
			value="map"
			layout="icon-start"
		>
			<Label>Map</Label>
			<Ionicon icon="{pin}" />
		</SegmentButton>
	</Segment>

	<ListHeader>Icon end</ListHeader>

	<Segment
		color="danger"
		value="map"
	>
		<SegmentButton
			value="call"
			layout="icon-end"
		>
			<Ionicon icon="{call}" />
			<Label>Call</Label>
		</SegmentButton>
		<SegmentButton
			value="favorite"
			layout="icon-end"
		>
			<Ionicon icon="{heart}" />
			<Label>Favorite</Label>
		</SegmentButton>
		<SegmentButton
			value="map"
			layout="icon-end"
		>
			<Ionicon icon="{pin}" />
			<Label>Map</Label>
		</SegmentButton>
	</Segment>
</List>
