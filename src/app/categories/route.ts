export const dynamic = 'force-static';

type categories = {
	id: number;
	name: string;
};

const GET = async () => {
	const categories: categories[] = [
		{ id: 1, name: 'Electronics' },
		{ id: 2, name: 'Books' },
		{ id: 3, name: 'Clothing' },
		{ id: 4, name: 'Home and Garden' },
	];

	return Response.json(categories);
};

export { GET };
