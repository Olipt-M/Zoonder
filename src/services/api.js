import { $fetch } from 'ohmyfetch'
const api = $fetch.create({baseURL: 'https://zoonder.grimille.fr'})

export const getRandomUser = async () => {
  return api('/api/profiles/random', { method: 'GET' });
}

export const authentifyUser = async (credentials) => {
  return api('/auth/login', { method: 'POST', body: credentials });
}

export const testMatch = async (id) => {
  return api('/api/match', { method: 'POST', body: id });
}
