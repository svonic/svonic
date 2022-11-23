<script lang="ts">
	import { browser } from '$app/environment';
	import type { Location } from '$lib/models/location';
	import { ButtonGroup, Content, DrawerButton, Header, Title, Toolbar } from '@svonic/core';
	import { onMount } from 'svelte';
	import { darkStyle } from './_map-dark-style';

	export let data;
	export let locations: Location[];

	let apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;
	let mapCanvas: HTMLElement;
	let map: google.maps.Map;

	const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;

	if (browser) {
		onMount(async () => {
			const appEl = document.querySelector('ion-app');
			let isDark = false;
			let mapData = locations;
			let style = [];

			if (appEl) {
				if (appEl.classList.contains('dark-theme')) {
					style = darkStyle;
				}

				const googleMaps = await getGoogleMaps(apiKey);

				const mapEle = mapCanvas;

				map = new googleMaps.Map(mapEle, {
					center: mapData.find((d: Location) => d.center),
					zoom: 16,
					styles: style
				});

				mapData.forEach((markerData: Location) => {
					const infoWindow = new googleMaps.InfoWindow({
						content: `<h5>${markerData.name}</h5>`
					});

					const marker: google.maps.Marker = new googleMaps.Marker({
						position: markerData,
						map,
						title: markerData.name
					});

					marker.addListener('click', () => {
						infoWindow.open(map, marker);
					});
				});

				googleMaps.event.addListenerOnce(map, 'idle', () => {
					mapEle.classList.add('show-map');
				});

				const observer = new MutationObserver((mutations) => {
					mutations.forEach((mutation) => {
						if (mutation.attributeName === 'class') {
							const el = mutation.target as HTMLElement;
							isDark = el.classList.contains('dark-theme');
							if (map && isDark) {
								map.setOptions({ styles: darkStyle });
							} else if (map) {
								map.setOptions({ styles: [] });
							}
						}
					});
				});
				observer.observe(appEl, {
					attributes: true
				});
			}
		});
	}

	const getGoogleMaps = (apiKey: string): Promise<any> => {
		const win = window as any;
		const googleModule = win.google;
		if (googleModule && googleModule.maps) {
			return Promise.resolve(googleModule.maps);
		}

		return new Promise((resolve, reject) => {
			const scriptElement = document.getElementById('map-script') as HTMLScriptElement;
			if (!scriptElement) {
				const script = document.createElement('script');
				console.log(script);
				script.id = 'map-script';
				script.src = scriptSrc;
				script.async = true;
				script.defer = true;
				document.body.appendChild(script);
				script.onload = () => {
					const googleModule2 = win.google;
					if (googleModule2 && googleModule2.maps) {
						console.log('google maps is available');
						resolve(googleModule2.maps);
					} else {
						console.log('google maps not available');
						reject('google maps not available');
					}
				};
			}
		});
	};
</script>

<!-- <svelte:head>
	<script async defer src="{scriptSrc}">
	</script>
</svelte:head> -->

<svelte:head>
	<title>Map</title>
</svelte:head>

<Header>
	<Toolbar>
		<ButtonGroup toSlot="start">
			<DrawerButton />
		</ButtonGroup>
		<Title>Map</Title>
	</Toolbar>
</Header>

<Content>
	<div
		class="map-canvas show-map"
		id="map"
		bind:this="{mapCanvas}"
	></div>
</Content>

<style>
	.map-canvas {
		position: absolute;

		height: 100%;
		width: 100%;

		background-color: transparent;

		opacity: 0;
		transition: opacity 150ms ease-in;
	}

	.show-map {
		opacity: 1;
	}
</style>
