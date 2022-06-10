<script lang="ts">
	import { Button, ButtonGroup, Ionicon, Title, Toolbar } from '@svonic/core';
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
	import { Button, ButtonGroup, Ionicon, Title, Toolbar } from '@svonic/core';
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
	<ButtonGroup toSlot="secondary">
		<Button>
			<Ionicon icon="{personCircle}" toSlot="icon-only" />
		</Button>
		<Button>
			<Ionicon icon="{search}" toSlot="icon-only" />
		</Button>
	</ButtonGroup>
	<ButtonGroup toSlot="primary">
		<Button color="secondary">
			<Ionicon
				ios="ellipsis-horizontal"
				iosIcon="{ellipsisHorizontal}"
				md="ellipsis-vertical"
				mdIcon="{ellipsisVertical}"
				toSlot="icon-only"
			/>
		</Button>
	</ButtonGroup>
	<Title>Default ButtonGroup</Title>
</Toolbar>

<Toolbar color="medium">
	<ButtonGroup toSlot="secondary">
		<Button fill="solid">
			<Ionicon icon="{personCircle}" toSlot="start" />
			Contact
		</Button>
	</ButtonGroup>
	<Title>Solid ButtonGroup</Title>
	<ButtonGroup toSlot="primary">
		<Button fill="solid" color="secondary">
			Help
			<Ionicon icon="{helpCircle}" toSlot="end" />
		</Button>
	</ButtonGroup>
</Toolbar>

<Toolbar color="light">
	<ButtonGroup toSlot="secondary">
		<Button fill="outline">
			<Ionicon icon="{star}" toSlot="start" />
			Star
		</Button>
	</ButtonGroup>
	<Title>Outline ButtonGroup</Title>
	<ButtonGroup toSlot="primary">
		<Button color="danger" fill="outline">
			Edit
			<Ionicon icon="{create}" toSlot="end" />
		</Button>
	</ButtonGroup>
</Toolbar>

<Toolbar color="secondary">
	<ButtonGroup toSlot="secondary">
		<Button>Account</Button>
	</ButtonGroup>
	<ButtonGroup toSlot="primary">
		<Button color="danger">Edit</Button>
	</ButtonGroup>
	<Title>Text Only ButtonGroup</Title>
</Toolbar>
`;
</script>

<Toolbar color="primary" {...$$restProps}>
	<ButtonGroup toSlot="secondary">
		<Button>
			<Ionicon icon="{personCircle}" toSlot="icon-only" />
		</Button>
		<Button>
			<Ionicon icon="{search}" toSlot="icon-only" />
		</Button>
	</ButtonGroup>
	<ButtonGroup toSlot="primary">
		<Button color="secondary">
			<Ionicon
				ios="ellipsis-horizontal"
				iosIcon="{ellipsisHorizontal}"
				md="ellipsis-vertical"
				mdIcon="{ellipsisVertical}"
				toSlot="icon-only"
			/>
		</Button>
	</ButtonGroup>
	<Title>Default ButtonGroup</Title>
</Toolbar>

<Toolbar color="medium" {...$$restProps}>
	<ButtonGroup toSlot="secondary">
		<Button fill="solid">
			<Ionicon icon="{personCircle}" toSlot="start" />
			Contact
		</Button>
	</ButtonGroup>
	<Title>Solid ButtonGroup</Title>
	<ButtonGroup toSlot="primary">
		<Button fill="solid" color="secondary">
			Help
			<Ionicon icon="{helpCircle}" toSlot="end" />
		</Button>
	</ButtonGroup>
</Toolbar>

<Toolbar color="light" {...$$restProps}>
	<ButtonGroup toSlot="secondary">
		<Button fill="outline">
			<Ionicon icon="{star}" toSlot="start" />
			Star
		</Button>
	</ButtonGroup>
	<Title>Outline ButtonGroup</Title>
	<ButtonGroup toSlot="primary">
		<Button color="danger" fill="outline">
			Edit
			<Ionicon icon="{create}" toSlot="end" />
		</Button>
	</ButtonGroup>
</Toolbar>

<Toolbar color="secondary" {...$$restProps}>
	<ButtonGroup toSlot="secondary">
		<Button>Account</Button>
	</ButtonGroup>
	<ButtonGroup toSlot="primary">
		<Button color="danger">Edit</Button>
	</ButtonGroup>
	<Title>Text Only ButtonGroup</Title>
</Toolbar>
