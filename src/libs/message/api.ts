import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

import { BaseApiResponse } from '@api/types';

import getApiRequestHeaders from '@utils/getApiRequestHeaders';
import getCleanGraphQLResponse from '@utils/getCleanGraphQLResponse';

import { SentMessage } from './types';

// Define a service using a base URL and expected endpoints
export const messageApi = createApi({
  reducerPath: 'messageApi',
  baseQuery: graphqlRequestBaseQuery({
    url: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers) => getApiRequestHeaders(headers),
  }),
  endpoints: (builder) => ({
    getMessageList: builder.query<SentMessage[], number>({
      query: (channelId: number) => ({
        document: gql`
          query getMessageList($page: Int = 1, $per_page: Int = 30) {
            messagesCollection(filter: { channel_id: { eq: ${channelId} } }) {
              edges {
                node {
                  id
                  content
                  author
                  channel_id
                  sent_at
                  updated_at
                  users {
                    id
                    username
                    thumbnail
                  }
                }
              }
            }
          }
        `,
      }),
      transformResponse: (response: BaseApiResponse<SentMessage>) =>
        getCleanGraphQLResponse(response),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMessageListQuery } = messageApi;
