<script lang="ts">
	import { Ionicon, Label, Segment, SegmentButton } from '@svonic/core';
	import { basket, call, globe, heart, home, pin, star } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Ionicon, Label, Segment, SegmentButton } from '@svonic/core';
	import { basket, call, globe, heart, home, pin, star } from 'ionicons/icons/index.js';
<\/script>

<div class="flex flex-row justify-center">
	<Segment class="w-80" scrollable="{true}" value="star">
		<SegmentButton value="home">
			<Ionicon icon="{home}" />
			<Label>Home</Label>
		</SegmentButton>
		<SegmentButton value="heart">
			<Ionicon icon="{heart}" />
			<Label>Heart</Label>
		</SegmentButton>
		<SegmentButton value="pin">
			<Ionicon icon="{pin}" />
			<Label>Pin</Label>
		</SegmentButton>
		<SegmentButton value="star">
			<Ionicon icon="{star}" />
			<Label>Star</Label>
		</SegmentButton>
		<SegmentButton value="call">
			<Ionicon icon="{call}" />
			<Label>Call</Label>
		</SegmentButton>
		<SegmentButton value="globe">
			<Ionicon icon="{globe}" />
			<Label>Globe</Label>
		</SegmentButton>
		<SegmentButton value="basket">
			<Ionicon icon="{basket}" />
			<Label>Basket</Label>
		</SegmentButton>
	</Segment>
</div>
`;
</script>

<div class="flex flex-row justify-center">
	<Segment class="w-80" scrollable="{true}" value="star" {...$$restProps}>
		<SegmentButton value="home">
			<Ionicon icon="{home}" />
			<Label>Home</Label>
		</SegmentButton>
		<SegmentButton value="heart">
			<Ionicon icon="{heart}" />
			<Label>Heart</Label>
		</SegmentButton>
		<SegmentButton value="pin">
			<Ionicon icon="{pin}" />
			<Label>Pin</Label>
		</SegmentButton>
		<SegmentButton value="star">
			<Ionicon icon="{star}" />
			<Label>Star</Label>
		</SegmentButton>
		<SegmentButton value="call">
			<Ionicon icon="{call}" />
			<Label>Call</Label>
		</SegmentButton>
		<SegmentButton value="globe">
			<Ionicon icon="{globe}" />
			<Label>Globe</Label>
		</SegmentButton>
		<SegmentButton value="basket">
			<Ionicon icon="{basket}" />
			<Label>Basket</Label>
		</SegmentButton>
	</Segment>
</div>
