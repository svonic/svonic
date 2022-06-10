<script lang="ts">
	import { Text } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Text } from '@svonic/core';
<\/script>

<Text color="primary">
	<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
</Text>

<Text color="secondary">
	<h2>Nam rutrum justo massa, maximus elementum leo dignissim ac.</h2>
</Text>

<Text color="tertiary">
	<h3>Vestibulum eleifend lorem nec neque interdum varius.</h3>
</Text>

<Text color="success">
	<h4>Sed in neque at nibh congue tincidunt.</h4>
</Text>

<Text color="warning">
	<h5>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</h5>
</Text>

<Text color="danger">
	<h6>Suspendisse potenti.</h6>
</Text>

<p>
	Donec magna odio, <Text color="primary">semper</Text> ac nibh et, vestibulum eleifend
	felis. Donec
	<Text color="secondary">pulvinar</Text> ex non quam vulputate malesuada in a magna.
	Praesent massa arcu, <Text color="tertiary">vehicula</Text> id pharetra et, cursus
	at lectus.
</p>
`;
</script>

<div class="flex flex-col gap-8 text-left">
	<Text color="primary" {...$$restProps}>
		<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
	</Text>

	<Text color="secondary" {...$$restProps}>
		<h2>Nam rutrum justo massa, maximus elementum leo dignissim ac.</h2>
	</Text>

	<Text color="tertiary" {...$$restProps}>
		<h3>Vestibulum eleifend lorem nec neque interdum varius.</h3>
	</Text>

	<Text color="success" {...$$restProps}>
		<h4>Sed in neque at nibh congue tincidunt.</h4>
	</Text>

	<Text color="warning" {...$$restProps}>
		<h5>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</h5>
	</Text>

	<Text color="danger" {...$$restProps}>
		<h6>Suspendisse potenti.</h6>
	</Text>

	<p>
		Donec magna odio, <Text color="primary" {...$$restProps}>semper</Text> ac nibh et, vestibulum eleifend
		felis. Donec
		<Text color="secondary" {...$$restProps}>pulvinar</Text> ex non quam vulputate malesuada in a magna.
		Praesent massa arcu, <Text color="tertiary" {...$$restProps}>vehicula</Text> id pharetra et, cursus
		at lectus.
	</p>
</div>
