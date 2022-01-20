const session = sessionStorage;
const prefix = 'wx';

export function setCache(id, body) {
  if (!body) return;
  session.setItem(`${prefix}${id}`, JSON.stringify(body));
}

export function getCache(id) {
  try {
    const cache = session.getItem(`${prefix}${id}`);
    return cache ? JSON.parse(cache) : null;
  } catch (err) {
    throw new Error('parse body err');
  }
}
