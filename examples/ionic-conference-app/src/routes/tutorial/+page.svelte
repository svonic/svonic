<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import {
		Button,
		ButtonGroup,
		Content,
		Header,
		menuController,
		Title,
		Toolbar
	} from '@svonic/core';
	import { onDestroy, onMount } from 'svelte';
	import 'swiper/css';
	import 'swiper/css/pagination';

	let showSkip = true;

	if (browser) {
		onMount(async () => {
			await menuController.enable(false);
			console.log('menu mount', await menuController.isEnabled());
		});

		onDestroy(async () => {
			await menuController.enable(true);
			console.log('menu destroy', await menuController.isEnabled());
		});
	}

	const startApp = async () => {
		await goto('/app/tabs/schedule');
	};
</script>

<svelte:head>
	<title>Tutorial</title>
</svelte:head>

<Header class="ion-no-border tutorial-header">
	<Toolbar>
		<ButtonGroup toSlot="end">
			{#if showSkip}
				<Button
					color="primary"
					on:click="{startApp}">Skip</Button
				>
			{/if}
		</ButtonGroup>
		<Title>Account</Title>
	</Toolbar>
</Header>

<Content fullscreen="{true}">
	<!-- <Swiper
		keyboard="{{
			enabled: true
		}}"
		mousewheel="{true}"
		modules="{[Keyboard, Mousewheel, Navigation, Pagination]}"
		navigation="{true}"
		pagination="{{
			clickable: true
		}}"
		slidesPerView="{1}"
		spaceBetween="{30}"
		on:slideChange="{() => console.log('slide change')}"
		on:slideChangeTransitionStart="{onSlideChangeStart}"
		on:swiper="{setSwiperRef}"
	>
		<SwiperSlide>
			<img
				alt=""
				class="slide-image"
				src="assets/img/ica-slidebox-img-1.png"
			/>
			<h2 class="slide-title">
				Welcome to
				<b>ICA</b>
			</h2>
			<p>
				The
				<b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration
				of proper code use.
			</p>
		</SwiperSlide>
		<SwiperSlide>
			<img
				alt=""
				class="slide-image"
				src="assets/img/ica-slidebox-img-2.png"
			/>
			<h2 class="slide-title">What is Ionic?</h2>
			<p>
				<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile
				apps with web technologies like HTML, CSS, and JavaScript.
			</p>
		</SwiperSlide>
		<SwiperSlide>
			<img
				alt=""
				class="slide-image"
				src="assets/img/ica-slidebox-img-3.png"
			/>
			<h2 class="slide-title">What is Ionic Appflow?</h2>
			<p>
				<b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework
				that brings a totally new level of app development agility to mobile dev teams.
			</p>
		</SwiperSlide>
		<SwiperSlide>
			<img
				alt=""
				src="assets/img/ica-slidebox-img-4.png"
				class="slide-image"
			/>
			<h2 class="slide-title">Ready to Play?</h2>
			<Button
				fill="clear"
				on:click="{startApp}"
			>
				Continue
				<Ionicon
					icon="{arrowForward}"
					toSlot="end"
				/>
			</Button>
		</SwiperSlide>
	</Swiper> -->
</Content>

<style>
	.slide-title {
		margin-top: 2.8rem;
		text-align: center;
	}

	.slide-image {
		max-height: 50%;
		max-width: 60%;
		margin: 36px 0;
		pointer-events: none;
		text-align: center;
	}

	b {
		font-weight: 500;
	}

	p {
		padding: 0 40px;
		font-size: 14px;
		line-height: 1.5;
		color: var(--ion-color-step-600, #60646b);
		text-align: center;
	}

	b {
		color: var(--ion-text-color, #000000);
	}
</style>
