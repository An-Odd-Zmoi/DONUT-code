/**
 * Counter for number of requests remaining
 */

export default class RequestStorage {
  private _initNumRequests: number;
  numRequests: number;
  lastRefreshDate: number;

  constructor(numRequests: number, lastRefreshDate: number) {
    this._initNumRequests = numRequests;

    this.numRequests = numRequests;
    this.lastRefreshDate = lastRefreshDate;
  }

  reset() {
    this.numRequests = this._initNumRequests;
  }
}
