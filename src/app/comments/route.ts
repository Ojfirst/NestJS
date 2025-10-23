import { NextRequest } from 'next/server';
import { comments } from './data';

const GET = async (req: NextRequest) => {
	const searchParams = req.nextUrl.searchParams; // Grab all query parameters
	const query = searchParams.get('query'); //fetch specific query parameter
	const filteredComments = query
		? comments.filter((comment) => comment.text.includes(query.toLowerCase()))
		: comments;
	return Response.json(filteredComments); // If query, we filter to only include search terms
};

const POST = async (request: Request) => {
	const comment = await request.json();
	const newComment = {
		id: comments.length + 1,
		text: comment.text,
	};
	comments.push(newComment);
	return new Response(JSON.stringify(newComment), {
		headers: { 'Content-Type': 'application/json' },
		status: 201,
	});
};

export { GET, POST };
