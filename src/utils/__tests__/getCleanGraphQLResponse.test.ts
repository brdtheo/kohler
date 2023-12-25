import { faker } from '@faker-js/faker';
import { describe, expect, test } from '@jest/globals';

import getCleanGraphQLResponse from '@utils/getCleanGraphQLResponse';

import { BaseApiResponse } from '@/types/common';

type FakeNodeObject = {
  node: FakeObject;
};

type FakeObject = {
  id: number;
  description: string;
};

const FAKE_ID = faker.number.int(1000);
const FAKE_DESCRIPTION = faker.lorem.sentences(5);

describe('[hook]: getCleanGraphQLResponse', () => {
  test('is returning a GraphQL response object without edges/node properties', () => {
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

    const cleanGraphQLResponse = getCleanGraphQLResponse(fakeGraphQLResponse);

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
});
