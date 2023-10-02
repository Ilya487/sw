const CACHE_NAME = "queries cache";
const STORAGE_NAME = "/storage";

export const cache = {
  _isInitialize: false,
  _queryCache: undefined,

  storage: {
    search: {},
  },

  async initialize() {
    if (this._isInitialize) return;

    this._queryCache = await caches.open(CACHE_NAME);
    const response = await this._queryCache.match(STORAGE_NAME);

    if (response) {
      const json = await response.json();

      this.storage = json;
    }

    this._isInitialize = true;

    window.addEventListener("beforeunload", async () => {
      this._queryCache.put(
        STORAGE_NAME,
        new Response(JSON.stringify(this.storage))
      );
    });
  },
};
