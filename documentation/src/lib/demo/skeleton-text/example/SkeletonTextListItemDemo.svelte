<script lang="ts">
	import { Button, Item, Label, List, ListHeader, SkeletonText, Thumbnail } from '@svonic/core';

	let showData = false;

	export const codeSnippet = `
<script lang="ts">
	import { Button, Item, Label, List, ListHeader, SkeletonText, Thumbnail } from '@svonic/core';

	let showData = false;
<\/script>

<Button
	on:click="{() => {
		showData = !showData;
	}}">Toggle</Button
>
{#if showData === true}
	<List>
		<ListHeader>Albums</ListHeader>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Abbey Road</h3>
				<p>The Beatles</p>
				<p>1969</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>The Dark Side of the Moon</h3>
				<p>Pink Floyd</p>
				<p>1973</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>For Emma, Forever Ago</h3>
				<p>Bon Iver</p>
				<p>2008</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Beast Epic</h3>
				<p>Iron & Wine</p>
				<p>2017</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Worlds</h3>
				<p>Porter Robinson</p>
				<p>2014</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Worlds</h3>
				<p>Awaken, My Love!</p>
				<p>2016</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Coloring Book</h3>
				<p>Chance the Rapper</p>
				<p>2016</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Primal Heart</h3>
				<p>Kimbra</p>
				<p>2018</p>
			</Label>
		</Item>
	</List>
{:else}
	<List {...$$restProps}>
		<ListHeader>
			<SkeletonText animated height="16px" width="80px" />
		</ListHeader>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText animated width="80%" />
				</h3>
				<p>
					<SkeletonText animated width="60%" />
				</p>
				<p>
					<SkeletonText animated width="30%" />
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText animated width="80%" />
				</h3>
				<p>
					<SkeletonText animated width="60%" />
				</p>
				<p>
					<SkeletonText animated width="30%" />
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText animated width="80%" />
				</h3>
				<p>
					<SkeletonText animated width="60%" />
				</p>
				<p>
					<SkeletonText animated width="30%" />
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText animated width="80%" />
				</h3>
				<p>
					<SkeletonText animated width="60%" />
				</p>
				<p>
					<SkeletonText animated width="30%" />
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText animated width="80%" />
				</h3>
				<p>
					<SkeletonText animated width="60%" />
				</p>
				<p>
					<SkeletonText animated width="30%" />
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText animated width="80%" />
				</h3>
				<p>
					<SkeletonText animated width="60%" />
				</p>
				<p>
					<SkeletonText animated width="30%" />
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText animated width="80%" />
				</h3>
				<p>
					<SkeletonText animated width="60%" />
				</p>
				<p>
					<SkeletonText animated width="30%" />
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText animated width="80%" />
				</h3>
				<p>
					<SkeletonText animated width="60%" />
				</p>
				<p>
					<SkeletonText animated width="30%" />
				</p>
			</Label>
		</Item>
	</List>
{/if}
`;
</script>

<Button
	on:click="{() => {
		showData = !showData;
	}}">Toggle</Button
>
{#if showData === true}
	<List {...$$restProps}>
		<ListHeader>Albums</ListHeader>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Abbey Road</h3>
				<p>The Beatles</p>
				<p>1969</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>The Dark Side of the Moon</h3>
				<p>Pink Floyd</p>
				<p>1973</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>For Emma, Forever Ago</h3>
				<p>Bon Iver</p>
				<p>2008</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Beast Epic</h3>
				<p>Iron & Wine</p>
				<p>2017</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Worlds</h3>
				<p>Porter Robinson</p>
				<p>2014</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Worlds</h3>
				<p>Awaken, My Love!</p>
				<p>2016</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Coloring Book</h3>
				<p>Chance the Rapper</p>
				<p>2016</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
			</Thumbnail>
			<Label>
				<h3>Primal Heart</h3>
				<p>Kimbra</p>
				<p>2018</p>
			</Label>
		</Item>
	</List>
{:else}
	<List {...$$restProps}>
		<ListHeader>
			<SkeletonText
				animated
				height="16px"
				width="80px"
			/>
		</ListHeader>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText
						animated
						width="80%"
					/>
				</h3>
				<p>
					<SkeletonText
						animated
						width="60%"
					/>
				</p>
				<p>
					<SkeletonText
						animated
						width="30%"
					/>
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText
						animated
						width="80%"
					/>
				</h3>
				<p>
					<SkeletonText
						animated
						width="60%"
					/>
				</p>
				<p>
					<SkeletonText
						animated
						width="30%"
					/>
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText
						animated
						width="80%"
					/>
				</h3>
				<p>
					<SkeletonText
						animated
						width="60%"
					/>
				</p>
				<p>
					<SkeletonText
						animated
						width="30%"
					/>
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText
						animated
						width="80%"
					/>
				</h3>
				<p>
					<SkeletonText
						animated
						width="60%"
					/>
				</p>
				<p>
					<SkeletonText
						animated
						width="30%"
					/>
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText
						animated
						width="80%"
					/>
				</h3>
				<p>
					<SkeletonText
						animated
						width="60%"
					/>
				</p>
				<p>
					<SkeletonText
						animated
						width="30%"
					/>
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText
						animated
						width="80%"
					/>
				</h3>
				<p>
					<SkeletonText
						animated
						width="60%"
					/>
				</p>
				<p>
					<SkeletonText
						animated
						width="30%"
					/>
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText
						animated
						width="80%"
					/>
				</h3>
				<p>
					<SkeletonText
						animated
						width="60%"
					/>
				</p>
				<p>
					<SkeletonText
						animated
						width="30%"
					/>
				</p>
			</Label>
		</Item>
		<Item>
			<Thumbnail slot="start">
				<SkeletonText />
			</Thumbnail>
			<Label>
				<h3>
					<SkeletonText
						animated
						width="80%"
					/>
				</h3>
				<p>
					<SkeletonText
						animated
						width="60%"
					/>
				</p>
				<p>
					<SkeletonText
						animated
						width="30%"
					/>
				</p>
			</Label>
		</Item>
	</List>
{/if}
