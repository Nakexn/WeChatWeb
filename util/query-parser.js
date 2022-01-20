export function parseQuery(queryStr) {
  let query = {};
  queryStr = queryStr.trim().replace(/^(\?|#|&)/, '');

  if (!queryStr) {
    return null;
  }

  queryStr.split('&').forEach(param => {
    const [rawKey, rawValue] = param.split('=');
    const [key, val] = [decodeURIComponent(rawKey), rawValue ? decodeURIComponent(rawValue) : null];
    query[key] = val;
  });

  return query;
}
