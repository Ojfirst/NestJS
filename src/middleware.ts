import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
	const response = NextResponse.next();
	const themePreference = req.cookies.get('theme');
	if (!themePreference) {
		response.cookies.set('theme', 'dark');
	}

	response.headers.set('custom-heaader', 'custome-value');

	return response;

	// return NextResponse.redirect(new URL('/', req.url));
	// if (req.nextUrl.pathname === '/profile') {
	// 	return NextResponse.redirect(new URL('/comments', req.nextUrl));
	// }
};

// // Config object to only apply middleware to only apply to profile route.
// export const config = {
// 	matcher: '/profile',
// };
