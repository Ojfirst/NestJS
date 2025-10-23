export const dynamic = 'force-static';
export const revalidate = 10;

const GET = async () => {
	return Response.json({ time: new Date().toLocaleTimeString() });
};

export { GET };
