import { BaseApiResponse } from '@/types/common';

/**
 * Returns a GraphQL response without edges/node fields
 *
 * @param response The raw response returned by the API
 * @example
 * {
 *   transformResponse: (response: <BaseApiResponse<T>>) => getCleanGraphQLResponse(response) // T[]
 * }
 */
export default function getCleanGraphQLResponse<T>(
  response?: BaseApiResponse<T>,
): T[] {
  const parsedApiResponse = Object.values(response as BaseApiResponse<T>)[0]
    .edges;
  return parsedApiResponse.map((object) => object.node);
}
