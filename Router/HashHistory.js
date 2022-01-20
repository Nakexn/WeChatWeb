import { getCache, setCache } from '../util/cache-body.js';
import { def } from '../util/index.js';

export default class HashHistory {
  constructor(options) {
    this.matcher = options.matcher;
    this._matchedCount = 0;
    this._cache = {};
    this._init();
    window.addEventListener('load', this._listen);
    window.addEventListener('hashchange', this._listen);
  }

  _fireHandlers(matchedRoutes, body) {
    for (let i = 0; i < matchedRoutes.length; i++) {
      const item = matchedRoutes[i];
      const cache = this._getCache(item);

      const request = {
        body: body || cache,
        query: item.query,
        params: item.params
      };

      def(request, 'route', item.path);
      def(request, 'url', item.url);

      if (!body && cache) request._id = item._id;

      item.handler(request);

      this._cacheBody(body, item);
    }
  }

  _getCache(routeConfig) {
    return getCache(routeConfig._id);
  }

  _cacheBody(state, routeConfig) {
    if (state) {
      setCache(routeConfig._id, state);
    }
  }

  getMatchedCount() {
    return this._matchedCount;
  }

  _getHash() {
    return location.hash.slice(1);
  }

  _init() {
    // bind this._listen with this
    this._listen = event => {
      const path = this._getHash();
      const matchedRoutes = this.matcher.match(path);
      this._matchedCount = matchedRoutes.length;
      this._fireHandlers(matchedRoutes, this._cache[path]);
    };
  }

  go(url, body) {
    this._cache[url] = body;
    location.hash = `${url}`;
  }

  redirect(url, body) {
    const href = location.href;
    const index = href.indexOf('#');
    url = index > 0 ? `${href.slice(0, index)}#${url}` : `${href.slice(0, 0)}#${url}`;

    this._cache[url] = body;
    location.replace(url);
  }

  back() {
    history.go(-1);
  }

  stop() {
    window.removeEventListener('load', this._listen);
    window.removeEventListener('hashchange', this._listen);
  }
}
