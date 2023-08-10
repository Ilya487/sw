export async function getDetailedDescription(id, entity) {
  const response = await fetch(`https://swapi.dev/api/${entity}/${id}`);
  return await response.json();
}
