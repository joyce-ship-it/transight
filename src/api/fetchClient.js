const BASE_URL = "https://apitest.fleet.transight.net";

export async function fetchClient(endpoint, options = {}) {
  const { body, headers, ...rest } = options;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...rest,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`Request failed, Status: ${res.status}`);
  }

  return res.json();
}
