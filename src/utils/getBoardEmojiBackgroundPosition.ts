/**
 * Retrieve a random emoji from the board given max col/rows
 * @param maxCols columns number that should be included in the random selection
 * @param maxRows rows number that should be included in the random selection
 * @param emojiSize the width/height of one emoji in the board in pixels
 * @example
 * <div style={{ backgroundPosition: getBoardEmojiBackgroundPosition(5, 3, 24) }} />
 */
export default function getBoardEmojiBackgroundPosition(
  maxCols: number,
  maxRows: number,
  emojiSize: number
) {
  const randomX = emojiSize * Math.floor(Math.random() * maxCols);
  const randomY = emojiSize * Math.floor(Math.random() * maxRows);
  return `-${randomX}px -${randomY}px`;
}
