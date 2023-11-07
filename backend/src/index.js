export default {
	async fetch(request) {
		const url = new URL(request.url);
		if (request.method !== 'POST' && url.pathname !== '/') {
			return new Response(JSON.stringify({ Data: null, Error: 'Method Not Allowed' }), {
				status: 405,
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
					Allow: 'POST',
				},
			});
		}
		if (url.pathname === '/') {
			return new Response(JSON.stringify({ Data: 'API is healthy :)', Error: null }), {
				status: 200,
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
			});
		}
		const requestBody = await request.json();
		if (url.pathname === '/food') {
			const returnData = await processFoodCheck(requestBody);
			const responseData = { Data: returnData, Error: null };
			return new Response(JSON.stringify(responseData || INVALID_INPUT), {
				status: 200,
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
			});
		}
		if (url.pathname === '/cosmetic') {
			const returnData = await processCosmeticCheck(requestBody);
			const responseData = { Data: returnData, Error: null };
			return new Response(JSON.stringify(responseData || INVALID_INPUT), {
				status: 200,
				headers: {
					'Content-Type': 'application/json; charset=UTF-8',
				},
			});
		}
		return new Response(JSON.stringify({ Data: null, Error: 'Your request is invalid. Please try again later.' }), {
			status: 404,
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
		});
	},
};

const HEALTHY_SCORE = 100;
const INVALID_INPUT = { Data: null, Error: 'Please provide complete input by specifying both ingredients and category.' };
const processFoodCheck = async (requestBody) => {
	const returnData = {};
	if (requestBody?.category?.length === 0 || requestBody?.ingredients?.length === 0) {
		return null;
	}
	return returnData;
};

const processCosmeticCheck = async (requestBody) => {
	const returnData = {};
	if (requestBody?.category?.length === 0 || requestBody?.ingredients?.length === 0) {
		return null;
	}
	returnData.SCORE = HEALTHY_SCORE;
	requestBody.ingredients.reduce((ingredientsArray, ingredent) => {
		const hazardLevel = Math.floor(Math.random() * 6);
		ingredientsArray.push({ name: ingredent, hazardLevel });
		returnData.INGREDIENTS = ingredientsArray;
		returnData.SCORE -= hazardLevel;
		return ingredientsArray;
	}, []);
	return returnData;
};
