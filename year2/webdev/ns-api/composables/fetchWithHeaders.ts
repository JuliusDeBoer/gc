export async function fetchWithHeaders(url: string) {
  const result = await fetch(url, {
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.API_KEY!,
      "Content-Type": "application/json",
    },
  });

  return new Response(result.body, {
    headers: {
      "Content-Type": "application/json",
    },
    status: result.status,
    statusText: result.statusText,
  });
}
