export default defineEventHandler((_) => {
  return fetch(
    "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/arrivals?station=dtc",
    {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.API_KEY!,
        "Content-Type": "application/json",
      },
    },
  );
});
