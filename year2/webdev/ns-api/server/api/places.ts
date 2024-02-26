export default defineEventHandler(async () => {
  const result = await fetch(
    `https://gateway.apiportal.ns.nl/places-api/v2/places`,
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
