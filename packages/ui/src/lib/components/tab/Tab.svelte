<script lang="ts">
	import { Icon, Label, SegmentButton } from '@svonic/core';

	export let icon = '';
	export let index = 0;
	export let label = '';
</script>

<SegmentButton layout="icon-start" value="{index}">
	<Icon path="{icon}" />
	<Label>{label}</Label>
</SegmentButton>
