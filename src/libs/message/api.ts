import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

import { BaseApiResponse } from '@api/types';

import getApiRequestHeaders from '@utils/getApiRequestHeaders';
import getCleanGraphQLResponse from '@utils/getCleanGraphQLResponse';

import { MessageInput, SentMessage } from './types';

// Define a service using a base URL and expected endpoints
export const messageApi = createApi({
  reducerPath: 'messageApi',
  baseQuery: graphqlRequestBaseQuery({
    url: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers) => getApiRequestHeaders(headers),
  }),
  endpoints: (builder) => ({
    getMessageList: builder.query<SentMessage[], string>({
      query: (channelId) => ({
        document: gql`
          query getMessageList($page: Int = 1, $per_page: Int = 30) {
            messageCollection(filter: { channel_id: { eq: ${channelId} } }) {
              edges {
                node {
                  id
                  content
                  author_id
                  channel_id
                  sent_at
                  updated_at
                  user {
                    id
                    username
                    thumbnail
                  }
                  member {
                    display_name
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
    createMessage: builder.mutation<SentMessage, MessageInput>({
      query: (message) => ({
        document: gql`
          mutation createMessage($message: messageInsertInput!) {
            insertIntomessageCollection(objects: [$message]) {
              records {
                id
              }
            }
          }
        `,
        variables: {
          message,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMessageListQuery, useCreateMessageMutation } = messageApi;
