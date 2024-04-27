/**
 * Set all of the headers for Supabase requests (API key etc)
 * @param headers The headers object provided by prepareHeaders callback
 */
export default function getApiRequestHeaders(headers: Headers, token: string) {
  headers.set('apiKey', import.meta.env.VITE_SUPABASE_API_KEY);
  headers.set('Authorization', `Bearer ${token}`);
  return headers;
}
