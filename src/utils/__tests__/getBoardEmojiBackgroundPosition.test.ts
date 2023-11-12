import { faker } from '@faker-js/faker';
import { describe, expect, test } from '@jest/globals';

import getBoardEmojiBackgroundPosition from '@utils/getBoardEmojiBackgroundPosition';

describe('[hook]: getBoardEmojiBackgroundPosition', () => {
  test('is returning a correct background position', () => {
    const maxCols = faker.number.int({ min: 1, max: 10 });
    const maxRows = faker.number.int({ min: 1, max: 10 });
    const emojiSize = faker.number.int({ min: 1, max: 10 });
    const result = getBoardEmojiBackgroundPosition(maxCols, maxRows, emojiSize);
    expect(result).toBeTruthy();
  });

  test('is returning a zero based background position when zero in params', () => {
    const result = getBoardEmojiBackgroundPosition(0, 0, 0);
    expect(result).toStrictEqual(`-0px -0px`);
  });
});
