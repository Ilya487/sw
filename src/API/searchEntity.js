let controller;
let signal;

export async function searchEntity(query, entity) {
  if (controller) controller.abort();

  controller = new AbortController();
  signal = controller.signal;

  if (!query) return;
  const response = await fetch(
    `https://swapi.dev/api/${entity}/?search=${query}`,
    { signal }
  );
  return await response.json();
}
