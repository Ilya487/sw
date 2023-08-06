export async function getPeoplePage(page) {
  const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
  const data = await response.json();

  return data;
}
