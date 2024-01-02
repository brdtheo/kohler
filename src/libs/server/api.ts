import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

import { BaseApiResponse } from '@api/types';

import getApiRequestHeaders from '@utils/getApiRequestHeaders';
import getCleanGraphQLResponse from '@utils/getCleanGraphQLResponse';

import { Server } from '@libs/server/types';

// Define a service using a base URL and expected endpoints
export const serverApi = createApi({
  reducerPath: 'serverApi',
  baseQuery: graphqlRequestBaseQuery({
    url: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers) => getApiRequestHeaders(headers),
  }),
  endpoints: (builder) => ({
    getServerList: builder.query<Server[], void>({
      query: () => ({
        document: gql`
          query getServerList($page: Int = 1, $per_page: Int = 30) {
            serverCollection {
              edges {
                node {
                  id
                  name
                  thumbnail
                  invite_code
                }
              }
            }
          }
        `,
      }),
      transformResponse: (response: BaseApiResponse<Server>) =>
        getCleanGraphQLResponse(response),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetServerListQuery } = serverApi;
