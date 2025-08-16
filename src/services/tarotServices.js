const API_BASE = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';


let _cacheAll = null;
const _cacheById = new Map();

async function safeFetch(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function getCards({ force = false } = {}) {
  if (_cacheAll && !force) return _cacheAll;
  const data = await safeFetch(API_BASE);
  _cacheAll = data;
  return data;
}

export async function getCardById(id, { force = false } = {}) {
  if (!force && _cacheById.has(id)) return _cacheById.get(id);
  const data = await safeFetch(`${API_BASE}/${id}`);
  _cacheById.set(id, data);
  return data;
}
