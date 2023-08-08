export async function getPersonInfo(id) {
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  return await response.json();
}
