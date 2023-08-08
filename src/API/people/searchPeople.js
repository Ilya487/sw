let controller;
let signal;

export async function searchPeople(query) {
  if (controller) controller.abort();

  controller = new AbortController();
  signal = controller.signal;

  if (!query) return;
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${query}`,
    { signal }
  );
  return await response.json();
}
