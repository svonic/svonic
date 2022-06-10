# 👷 ⚠️  READ THIS FIRST!
**Svonic** so far is more of a proof of concept and very much in an Alpha state and under construction.

#  Svonic

Svonic is a UI component library based on the [Ionic Framework](https://ionicframework.com).  Svonic so far consists of the following 3 ideas for packages.

#### Svonic Core
Svonic Core attempts to make it easier to construct a Svelte application using Ionic Web Components. Svonic Core wraps the Ionic Web Components to make them easier to use in a Svelte application.

#### Svonic UI
Svonic UI uses Svonic Core as a base to build components that Ionic has not created yet or is not interested in making. These missing components can take inspiration from other libraries like [Microsoft FluentUI ](https://developer.microsoft.com/en-us/fluentui#/controls/web) and [Mantine](https://github.com/mantinedev/mantine/).

By using a Svelte wrapper around the Ionic Web Components we could change or replace the underlying Ionic component in the future if necessary. Svonic UI can become a library of complex components, blocks and templates.

#### Svonic Forms
The Enterprise apps I normally build are very complex form applications with similar user interfaces to like [Microsoft Dynamics 365](https://dynamics.microsoft.com/en-us/sales/overview/) or [NetSuite](https://www.netsuite.com/portal/products/erp/order-management.shtml). Coming from Angular I wanted something similar to [Angular Material Form Fields.](https://material.angular.io/components/form-field/overview) Svonic Forms attempts to recreate these to make it easier to build complex forms UIs.
</br>

## 🤔 Why use Ionic?

Ionic has a "particular set of features" that makes it a great component framework to build SPA and MPA applications.

Some of these features are...

- Dark Mode
- RTL support
- Adaptive Styling for iOS and Material Design
- Keyboard shortcuts for Desktop

The full list of Ionic components can be found [here](https://ionicframework.com/docs/components).

<br />

## ⬇️ Installation

```
pnpm i -D @svonic/core
```


```
pnpm i -D @svonic/ui
```


```
pnpm i -D @svonic/forms
```

<br />

## 👩‍🚀 Getting Started
All Svonic components should be placed inside an Application component at the root of your application. The Application component helps bootstrap Ionic and make sure all the components are rendered correctly.


```svelte
<script>
	import { Application, Content, Footer, Header, Title, Toolbar } from '@svonic/core';
</script>

<Application>
	<Header>
		<Toolbar>
			<Title>Header</Title>
		</Toolbar>
	</Header>

	<Content>
		<h1>Main Content</h1>
		<slot />
	</Content>

	<Footer>
		<Toolbar>
			<Title>Footer</Title>
		</Toolbar>
	</Footer>
</Application>
```

<br />

## 📦 Packages
### Currently Svonic has these packages.
[Svonic Core](https://github.com/svonic/svonic/tree/main/packages/core)

[Svonic Forms](https://github.com/svonic/svonic/tree/main/packages/forms)

[Svonic UI](https://github.com/svonic/svonic/tree/main/packages/ui)


<br />

## 🏫 Example Apps
The [Ionic Conference App](https://github.com/svonic/svonic/tree/main/examples/ionic-conference-app) example app developed as a SvelteKit MPA.

![image](https://user-images.githubusercontent.com/6476560/172846750-dac9e9e3-313b-4cf8-b4ff-5af270fef9f9.png)

<br />

## 📘 Documentation
The Svonic Documentation can be found here...
<br />
💻 [Github](https://github.com/svonic/test/tree/main/documentation)
<br />
📚 [Docs](https://www.svonic.dev/)

There are demos for most Svonic Core components.

![image](https://user-images.githubusercontent.com/6476560/172847270-12aa3d5b-c71e-4cad-84c5-163b30053b7c.png)


<br />

## 💔 Not what you are looking for?
### 💡 Try these other great libraries!

#### DaisyUI
💻 [Github](https://github.com/saadeghi/daisyui)
<br />
📚 [Docs](https://daisyui.com/)

#### SvelteUI
💻 [GitHub](https://github.com/svelteuidev/svelteui)
<br />
📚 [Docs](https://www.svelteui.org)

#### Carbon Components
💻 [Github](https://carbon-components-svelte.onrender.com/)
<br />
📚 [Docs](https://carbon-components-svelte.onrender.com/)

<br />

## 🥶 Stop. Collaborate. Listen.
If you have feedback, ideas, questions, feature requests we can discuss all these and more in the [Github discussions](https://github.com/svonic/svonic/discussions).

<br />


## 🙏 Acknowledgments
### Tan Li Hau 👋 👋
I really learn so much from Li Hau. I wouldn't be able to do any of this without this amazing Youtube Channel.

💻 [Github](https://github.com/tanhauhau)
<br />
📺 [Youtube](https://www.youtube.com/c/lihautan)

### Other great resources that helped me a lot...

#### Johnny Magrippis
💻 [Github](https://github.com/jmagrippis)
<br />
📺 [Youtube](https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g/featured)

####  Joy of Code
💻 [Github](https://github.com/mattcroat)
<br />
📺 [Youtube](https://www.youtube.com/c/JoyofCodeDev/featured)

#### Tommertom
Thank you to Tommertom for showing the possibilities of using Ionic together with Svelte.

💻 [Github](https://github.com/Tommertom/svelte-ionic-app)


#### twMVC
Special thanks to the Taiwan MVC Group. ☕ 🇹🇼

🧑‍🎓 [Facebook](https://www.facebook.com/twmvc)
