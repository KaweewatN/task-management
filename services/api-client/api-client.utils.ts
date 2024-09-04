// contains utility functions for the api-client.
// reusable functions for fetching data from the api.
export async function fetchData<T>(apiUrl: string): Promise<T> {
  const res = await fetch(apiUrl);
  if (!res.ok) {
    throw await res.json();
  }
  return await res.json();
}
