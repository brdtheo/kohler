import { faker } from '@faker-js/faker';
import { describe, expect, test } from '@jest/globals';

import { BaseApiResponse } from '@api/types';

import {
  getCleanNodeArrayGraphQLResponse,
  getCleanNodeGraphQLResponse,
} from '@utils/getCleanGraphQLResponse';

type FakeNodeObject = {
  node: FakeObject;
};

type FakeObject = {
  id: number;
  description: string;
};

const FAKE_ID = faker.number.int(1000);
const FAKE_DESCRIPTION = faker.lorem.sentences(5);

describe('[utils]: API response utils', () => {
  test('is returning a GraphQL array of objects without edges/node properties', () => {
    const fakeGraphQLResponse: BaseApiResponse<FakeObject> = {
      myCollection: {
        edges: faker.helpers.multiple(
          () => ({
            node: {
              id: FAKE_ID,
              description: FAKE_DESCRIPTION,
            },
          }),
          { count: 3 },
        ) as FakeNodeObject[],
      },
    };

    const cleanGraphQLResponse =
      getCleanNodeArrayGraphQLResponse(fakeGraphQLResponse);

    expect(cleanGraphQLResponse).toHaveLength(3);
    expect(cleanGraphQLResponse).toStrictEqual(
      faker.helpers.multiple(
        () => ({
          id: FAKE_ID,
          description: FAKE_DESCRIPTION,
        }),
        { count: 3 },
      ),
    );
  });

  test('is returning a GraphQL object without edges/node properties', () => {
    const fakeGraphQLResponse: BaseApiResponse<FakeObject> = {
      myCollection: {
        edges: faker.helpers.multiple(
          () => ({
            node: {
              id: FAKE_ID,
              description: FAKE_DESCRIPTION,
            },
          }),
          { count: 3 },
        ) as FakeNodeObject[],
      },
    };

    const cleanGraphQLResponse =
      getCleanNodeGraphQLResponse(fakeGraphQLResponse);

    expect(cleanGraphQLResponse).toBeDefined();
    expect(cleanGraphQLResponse).toStrictEqual({
      id: FAKE_ID,
      description: FAKE_DESCRIPTION,
    });
  });
});
