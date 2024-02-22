import type { APIRoute } from "astro";

export const GET: APIRoute = ({ url }) => {
	const params = url.searchParams;

	if(params.get("q") == null) {
		return new Response(null, {
			status: 400,
			statusText: "Bad Request"
		});
	}

	return fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=FIXME&q=${params.get("q")}&units=metric`);
}
