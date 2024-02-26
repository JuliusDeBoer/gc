import { fetchWithHeaders } from "~/composables/fetchWithHeaders";

export default defineEventHandler(async () => {
  return fetchWithHeaders(
    `https://gateway.apiportal.ns.nl/places-api/v2/places`,
  );
});
