import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request';

import { BaseApiResponse } from '@api/types';

import getApiRequestHeaders from '@utils/getApiRequestHeaders';
import { getCleanNodeGraphQLResponse } from '@utils/getCleanGraphQLResponse';

import { User } from '@libs/user/types';

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: graphqlRequestBaseQuery({
    url: import.meta.env.VITE_BASE_API_URL,
    prepareHeaders: (headers, { getState }) =>
      getApiRequestHeaders(headers, getState().auth.accessToken),
  }),
  endpoints: (builder) => ({
    getUser: builder.query<User, string>({
      query: (email) => ({
        document: gql`
          query getUser($page: Int = 1, $per_page: Int = 30) {
            userCollection(filter: { email: { eq: $email } }) {
              edges {
                node {
                  id
                  email
                  thumbnail
                  bio
                  status
                  username
                }
              }
            }
          }
        `,
        variables: {
          email,
        },
      }),
      transformResponse: (response: BaseApiResponse<User>) =>
        getCleanNodeGraphQLResponse(response),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery } = userApi;
