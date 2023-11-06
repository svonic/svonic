<script lang="ts">
	import { Button, Buttons, Ionicon, Title, Toolbar } from '@svonic/core';
	import {
		create,
		ellipsisHorizontal,
		ellipsisVertical,
		helpCircle,
		personCircle,
		search,
		star
	} from 'ionicons/icons/index.js';

	export const codeSnippet = `
<script lang="ts">
	import { Button, Buttons, Ionicon, Title, Toolbar } from '@svonic/core';
	import {
		create,
		ellipsisHorizontal,
		ellipsisVertical,
		helpCircle,
		personCircle,
		search,
		star
	} from 'ionicons/icons/index.js';
<\/script>

<Toolbar color="primary">
	<Buttons slot="secondary">
		<Button>
			<Ionicon icon="{personCircle}" slot="icon-only" />
		</Button>
		<Button>
			<Ionicon icon="{search}" slot="icon-only" />
		</Button>
	</Buttons>
	<Buttons slot="primary">
		<Button color="secondary">
			<Ionicon
				ios="ellipsis-horizontal"
				iosIcon="{ellipsisHorizontal}"
				md="ellipsis-vertical"
				mdIcon="{ellipsisVertical}"
				slot="icon-only"
			/>
		</Button>
	</Buttons>
	<Title>Default Buttons</Title>
</Toolbar>

<Toolbar color="medium">
	<Buttons slot="secondary">
		<Button fill="solid">
			<Ionicon icon="{personCircle}" slot="start" />
			Contact
		</Button>
	</Buttons>
	<Title>Solid Buttons</Title>
	<Buttons slot="primary">
		<Button fill="solid" color="secondary">
			Help
			<Ionicon icon="{helpCircle}" slot="end" />
		</Button>
	</Buttons>
</Toolbar>

<Toolbar color="light">
	<Buttons slot="secondary">
		<Button fill="outline">
			<Ionicon icon="{star}" slot="start" />
			Star
		</Button>
	</Buttons>
	<Title>Outline Buttons</Title>
	<Buttons slot="primary">
		<Button color="danger" fill="outline">
			Edit
			<Ionicon icon="{create}" slot="end" />
		</Button>
	</Buttons>
</Toolbar>

<Toolbar color="secondary">
	<Buttons slot="secondary">
		<Button>Account</Button>
	</Buttons>
	<Buttons slot="primary">
		<Button color="danger">Edit</Button>
	</Buttons>
	<Title>Text Only Buttons</Title>
</Toolbar>
`;
</script>

<Toolbar
	color="primary"
	{...$$restProps}
>
	<Buttons slot="secondary">
		<Button>
			<Ionicon
				icon="{personCircle}"
				slot="icon-only"
			/>
		</Button>
		<Button>
			<Ionicon
				icon="{search}"
				slot="icon-only"
			/>
		</Button>
	</Buttons>
	<Buttons slot="primary">
		<Button color="secondary">
			<Ionicon
				ios="ellipsis-horizontal"
				iosIcon="{ellipsisHorizontal}"
				md="ellipsis-vertical"
				mdIcon="{ellipsisVertical}"
				slot="icon-only"
			/>
		</Button>
	</Buttons>
	<Title>Default Buttons</Title>
</Toolbar>

<Toolbar
	color="medium"
	{...$$restProps}
>
	<Buttons slot="secondary">
		<Button fill="solid">
			<Ionicon
				icon="{personCircle}"
				slot="start"
			/>
			Contact
		</Button>
	</Buttons>
	<Title>Solid Buttons</Title>
	<Buttons slot="primary">
		<Button
			fill="solid"
			color="secondary"
		>
			Help
			<Ionicon
				icon="{helpCircle}"
				slot="end"
			/>
		</Button>
	</Buttons>
</Toolbar>

<Toolbar
	color="light"
	{...$$restProps}
>
	<Buttons slot="secondary">
		<Button fill="outline">
			<Ionicon
				icon="{star}"
				slot="start"
			/>
			Star
		</Button>
	</Buttons>
	<Title>Outline Buttons</Title>
	<Buttons slot="primary">
		<Button
			color="danger"
			fill="outline"
		>
			Edit
			<Ionicon
				icon="{create}"
				slot="end"
			/>
		</Button>
	</Buttons>
</Toolbar>

<Toolbar
	color="secondary"
	{...$$restProps}
>
	<Buttons slot="secondary">
		<Button>Account</Button>
	</Buttons>
	<Buttons slot="primary">
		<Button color="danger">Edit</Button>
	</Buttons>
	<Title>Text Only Buttons</Title>
</Toolbar>
