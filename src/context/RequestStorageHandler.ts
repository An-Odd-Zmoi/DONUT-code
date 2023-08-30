/**
 * Counter for number of requests remaining
 */

import RequestStorage from "./RequestStorage";

const STORAGE_KEY = "RequestStorage";
export const MAX_REQUESTS = 20;

export default class RequestStorageHandler {
  private _requestStorage: RequestStorage;

  constructor() {
    this._requestStorage = this.getStorage();
  }

  private getStorage() {
    const storage = localStorage.getItem(STORAGE_KEY);

    if (!storage) {
      return new RequestStorage(MAX_REQUESTS, Date.now());
    }
    const parsed = JSON.parse(storage);
    return new RequestStorage(parsed._numRequests, parsed._lastRefreshDate);
  }

  store() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this._requestStorage));
  }

  reset() {
    this._requestStorage.reset();
  }

  decrement() {
    if (this.hasRequests()) {
      this._requestStorage.numRequests--;
    }
  }

  hasRequests() {
    return this._requestStorage.numRequests > 0;
  }
}
