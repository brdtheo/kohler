import { BaseApiResponse } from '@api/types';

/**
 * Returns a GraphQL response without edges/node fields for an array of objects
 * @param response The raw response returned by the API
 * @example
 * {
 *   transformResponse: (response: <BaseApiResponse<T>>) => getCleanNodeArrayGraphQLResponse(response) // T[]
 * }
 */
export function getCleanNodeArrayGraphQLResponse<T>(
  response?: BaseApiResponse<T>,
): T[] {
  const parsedApiResponse = Object.values(response as BaseApiResponse<T>)[0]
    .edges;
  return parsedApiResponse.map((object) => object.node);
}

/**
 * Returns a GraphQL response without edges/node fields for one object
 * @param response The raw response returned by the API
 * @example
 * {
 *   transformResponse: (response: <BaseApiResponse<T>>) => getCleanGraphQLResponse(response) // T
 * }
 */
export function getCleanNodeGraphQLResponse<T>(
  response?: BaseApiResponse<T>,
): T {
  const parsedApiResponse = Object.values(response as BaseApiResponse<T>)[0]
    .edges;
  return parsedApiResponse.map((object) => object.node)[0];
}
