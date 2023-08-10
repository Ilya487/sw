export async function getEntitylePage(page, entity) {
  const response = await fetch(`https://swapi.dev/api/${entity}?page=${page}`);
  return await response.json();
}
