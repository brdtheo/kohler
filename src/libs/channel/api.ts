import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

import { BaseApiResponse } from '@api/types';

import getApiRequestHeaders from '@utils/getApiRequestHeaders';
import getCleanGraphQLResponse from '@utils/getCleanGraphQLResponse';

import { Channel } from '@libs/channel/types';

// Define a service using a base URL and expected endpoints
export const channelApi = createApi({
  reducerPath: 'channelApi',
  baseQuery: graphqlRequestBaseQuery({
    url: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers, { getState }) =>
      getApiRequestHeaders(headers, getState().auth.accessToken),
  }),
  endpoints: (builder) => ({
    getChannelList: builder.query<Channel[], string>({
      query: (serverId) => ({
        document: gql`
          query getChannelList($page: Int = 1, $per_page: Int = 30) {
            channelCollection(filter: { server_id: { eq: ${serverId} } }, orderBy: { created_at: AscNullsLast }) {
              edges {
                node {
                  id
                  name
                  description
                  type
                }
              }
            }
          }
        `,
      }),
      transformResponse: (response: BaseApiResponse<Channel>) =>
        getCleanGraphQLResponse(response),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetChannelListQuery } = channelApi;
