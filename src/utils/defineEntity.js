export function defineEntity(url) {
  const entities = [
    "films",
    "people",
    "starships",
    "vehicles",
    "species",
    "planets",
  ];

  for (const entity of entities) {
    if (url.includes(entity)) return entity;
  }
}
