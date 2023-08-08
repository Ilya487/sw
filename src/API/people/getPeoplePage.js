export async function getPeoplePage(page) {
  const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
  return await response.json();
}
