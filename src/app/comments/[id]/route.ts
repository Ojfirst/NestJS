import { NextResponse } from 'next/server';
import { comments } from '../data';

const GET = async (
	_req: Request,
	{ params }: { params: Promise<{ id: string }> }
) => {
	const { id } = await params;
	const comment = comments.find((comment) => comment.id === parseInt(id));
	return Response.json(comment);
};

const PATCH = async (
	req: Request,
	{ params }: { params: Promise<{ id: string }> }
) => {
	const { id } = await params;
	const body = await req.json(); // user request
	const { text } = body; // Destructure to find text

	const index = comments.findIndex((Comment) => Comment.id === parseInt(id)); // find id-index
	comments[index].text = text; //Update comments
	return NextResponse.json(comments[index]);
};

const DELETE = async (
	_req: Request,
	{ params }: { params: Promise<{ id: string }> }
) => {
	const { id } = await params; // finds id
	const index = comments.findIndex((comment) => comment.id === parseInt(id)); // matches id to array items
	const deletedComment = comments[index];
	comments.splice(index, 1); // Array method for deletion
	return Response.json(deletedComment);
};

export { GET, PATCH, DELETE };
