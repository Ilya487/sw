export async function setEntityPage(page, entity) {
  const response = await fetch(`https://swapi.dev/api/${entity}?page=${page}`);
  return await response.json();
}
