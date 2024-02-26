import { fetchWithHeaders } from "~/composables/fetchWithHeaders";

export default defineEventHandler(async (event) => {
  const station = getRouterParam(event, "station");

  return fetchWithHeaders(
    `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/arrivals?station=${station}`,
  );
});
