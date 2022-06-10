<script lang="ts">
	import { Chip, Ionicon, Label } from '@svonic/core';
	import { closeCircle, pin, restaurant, videocam, wine } from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Chip, Ionicon, Label } from '@svonic/core';
	import { closeCircle, pin, restaurant, videocam, wine } from 'ionicons/icons/index.js';
<\/script>

<Chip color="primary" outline="{true}">
	<Ionicon icon="{pin}" />
	<Label>Madison</Label>
	<Ionicon icon="{closeCircle}" />
</Chip>

<Chip color="secondary" outline="{true}">
	<Ionicon icon="{wine}" />
	<Label>Nightlife</Label>
	<Ionicon icon="{closeCircle}" />
</Chip>

<Chip color="tertiary" outline="{true}">
	<Ionicon icon="{restaurant}" />
	<Label>Dining</Label>
	<Ionicon icon="{closeCircle}" />
</Chip>

<Chip color="dark" outline="{true}">
	<Ionicon icon="{videocam}" />
	<Label>Entertainment</Label>
	<Ionicon icon="{closeCircle}" />
</Chip>
`;
</script>

<Chip color="primary" outline="{true}" {...$$restProps}>
	<Ionicon icon="{pin}" />
	<Label>Madison</Label>
	<Ionicon icon="{closeCircle}" />
</Chip>

<Chip color="secondary" outline="{true}" {...$$restProps}>
	<Ionicon icon="{wine}" />
	<Label>Nightlife</Label>
	<Ionicon icon="{closeCircle}" />
</Chip>

<Chip color="tertiary" outline="{true}" {...$$restProps}>
	<Ionicon icon="{restaurant}" />
	<Label>Dining</Label>
	<Ionicon icon="{closeCircle}" />
</Chip>

<Chip color="dark" outline="{true}" {...$$restProps}>
	<Ionicon icon="{videocam}" />
	<Label>Entertainment</Label>
	<Ionicon icon="{closeCircle}" />
</Chip>
