import type { Theme } from '$lib/models/theme';
import { getCookieValue } from '$lib/utils/cookie';
import type { GetSession, Handle } from '@sveltejs/kit';

const getThemeFromCookie = (cookie: string) => {
	const theme = getCookieValue(cookie, 'theme');
	return theme === 'dark' ? theme : null;
};

export const handle: Handle = async ({ event, resolve }) => {
	const cookie = event.request.headers.get('cookie');

	event.locals.theme = getThemeFromCookie(cookie);
	event.locals.user = JSON.parse(getCookieValue(cookie, 'user'));

	return resolve(event);
};

export const getSession: GetSession = ({ locals }) => {
	const theme: Theme = locals.theme;
	const user = locals.user;

	return { theme, user };
};
