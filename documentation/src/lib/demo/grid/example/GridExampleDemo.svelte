<script lang="ts">
	import { Col, Grid, Row } from '@svonic/core';

	export const codeSnippet = `
<script lang="ts">
	import { Col, Grid, Row } from '@svonic/core';
<\/script>

<Grid>
	<Row>
		<Col>
			<div>1 of 2</div>
		</Col>
		<Col>
			<div>2 of 2</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<div>1 of 3</div>
		</Col>
		<Col>
			<div>2 of 3</div>
		</Col>
		<Col>
			<div>3 of 3</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<div>1 of 3</div>
		</Col>
		<Col size="6">
			<div>2 of 3</div>
		</Col>
		<Col>
			<div>3 of 3</div>
		</Col>
	</Row>
	<Row>
		<Col size="6">
			<div>1 of 3</div>
		</Col>
		<Col>
			<div>2 of 3</div>
		</Col>
		<Col>
			<div>3 of 3</div>
		</Col>
	</Row>
	<Row>
		<Col offset="4">
			<div>1 of 2</div>
		</Col>
		<Col>
			<div>2 of 2</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<div>1 of 2</div>
		</Col>
		<Col offset="4">
			<div>2 of 2</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<div>1 of 4</div>
		</Col>
		<Col>
			<div>2 of 4</div>
		</Col>
		<Col>
			<div>3 of 4</div>
		</Col>
		<Col>
			<div>4 of 4</div>
		</Col>
	</Row>
</Grid>
`;
</script>

<Grid>
	<Row>
		<Col>
			<div>1 of 2</div>
		</Col>
		<Col>
			<div>2 of 2</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<div>1 of 3</div>
		</Col>
		<Col>
			<div>2 of 3</div>
		</Col>
		<Col>
			<div>3 of 3</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<div>1 of 3</div>
		</Col>
		<Col size="6">
			<div>2 of 3</div>
		</Col>
		<Col>
			<div>3 of 3</div>
		</Col>
	</Row>
	<Row>
		<Col size="6">
			<div>1 of 3</div>
		</Col>
		<Col>
			<div>2 of 3</div>
		</Col>
		<Col>
			<div>3 of 3</div>
		</Col>
	</Row>
	<Row>
		<Col offset="4">
			<div>1 of 2</div>
		</Col>
		<Col>
			<div>2 of 2</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<div>1 of 2</div>
		</Col>
		<Col offset="4">
			<div>2 of 2</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<div>1 of 4</div>
		</Col>
		<Col>
			<div>2 of 4</div>
		</Col>
		<Col>
			<div>3 of 4</div>
		</Col>
		<Col>
			<div>4 of 4</div>
		</Col>
	</Row>
</Grid>

<style>
	div {
		background-color: #f7f7f7;
		border: solid 1px #ddd;
		padding: 10px;
	}
</style>
