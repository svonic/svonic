import { redirect } from '@sveltejs/kit';

export async function load({ session }) {
	console.log('login session', session);
	if (session.user) {
		throw redirect(302, 'app/tabs/schedule');
	}
	return {};
}
