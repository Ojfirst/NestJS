import { type NextRequest } from 'next/server';
import { headers } from 'next/headers';

const GET = async (_req: NextRequest) => {
	// const reqHeaders = new Headers(req.headers);
	// console.log(reqHeaders.get('Authorization'));

	const newHeaders = await headers();
	console.log(newHeaders.get('Authorization'));

	return new Response('<h1>Profile Api World</h1>', {
		headers: { 'Content-Type': 'text/html' },
	});
};

export { GET };
