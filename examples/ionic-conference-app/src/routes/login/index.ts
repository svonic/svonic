import type { User } from '$lib/models/user';
import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ request }) => {
	const form = await request.formData();

	const username = String(form.get('username'));
	const password = String(form.get('password'));

	if (username.length < 1 && password.length < 1) {
		return {
			status: 400,
			body: 'Maximum Tweet length exceeded.',
			headers: { location: '/login' }
		};
	}

	const user: User = {
		username: username
	};

	return {
		body: {
			username
		},
		headers: {
			location: '/schedule',
			'Set-Cookie': `user=${JSON.stringify(user)}; SameSite=Strict; HttpOnly; Path=/`
		},
		status: 200
	};
};
