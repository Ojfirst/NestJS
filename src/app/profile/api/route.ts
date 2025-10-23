import { type NextRequest } from 'next/server';
import { cookies, headers } from 'next/headers';

const GET = async (req: NextRequest) => {
	// const reqHeaders = new Headers(req.headers);
	// console.log(reqHeaders.get('Authorization'));

	const newHeaders = await headers();
	console.log(newHeaders.get('Authorization'));

	const getCookie = req.cookies.get('theme');
	console.log(getCookie);

	const cookieStore = await cookies();
	cookieStore.set('resultPage', 'Working');

	console.log(cookieStore.get('resultPage'));

	return new Response('<h1>Profile Api World</h1>', {
		headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'theme=dark' },
	});
};

export { GET };
