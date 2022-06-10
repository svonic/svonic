/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	import { User } from '$lib/models/user';
	import type { Theme } from '$lib/models/theme';

	interface Locals {
		theme: Theme | null;
		user: User | null;
	}

	// interface Platform {}

	interface Session {
		theme: Theme | null;
		user: User | null;
	}
	// interface Stuff {}
}
