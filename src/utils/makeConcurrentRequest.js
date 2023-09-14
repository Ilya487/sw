export const makeConcurrentRequest = async (urls) => {
  const requests = urls.map((url) => fetch(url));

  const responses = await Promise.allSettled(requests);

  const jsons = responses.map((response) =>
    response.value ? response.value.json() : response
  );

  const data = await Promise.all(jsons);

  return data;
};
