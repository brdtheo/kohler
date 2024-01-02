import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

import { BaseApiResponse } from '@api/types';

import getApiRequestHeaders from '@utils/getApiRequestHeaders';
import getCleanGraphQLResponse from '@utils/getCleanGraphQLResponse';

import { Member } from './types';

// Define a service using a base URL and expected endpoints
export const memberApi = createApi({
  reducerPath: 'memberApi',
  baseQuery: graphqlRequestBaseQuery({
    url: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers) => getApiRequestHeaders(headers),
  }),
  endpoints: (builder) => ({
    getMemberList: builder.query<Member[], string>({
      query: (serverId) => ({
        document: gql`
          query getMemberList($page: Int = 1, $per_page: Int = 30) {
            membersCollection(filter: { server_id: { eq: ${serverId} } }) {
              edges {
                node {
                  id
                  server_id
                  user_id
                  display_name
                  joined_at
                  users {
                    id
                    status
                    thumbnail
                    username
                  }
                }
              }
            }
          }
        `,
      }),
      transformResponse: (response: BaseApiResponse<Member>) =>
        getCleanGraphQLResponse(response),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMemberListQuery } = memberApi;
