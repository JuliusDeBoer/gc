export default defineEventHandler(async (event) => {
  const station = getRouterParam(event, "station");

  const result = await fetch(
    `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/arrivals?station=${station}`,
    {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.API_KEY!,
        "Content-Type": "application/json",
      },
    },
  );

  return new Response(result.clone().body, {
    headers: {
      "Content-Type": "application/json",
    },
    status: result.status,
    statusText: result.statusText,
  });
});
