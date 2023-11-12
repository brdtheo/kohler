import { faker } from '@faker-js/faker';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';

import getBoardEmojiBackgroundPosition from '@utils/getBoardEmojiBackgroundPosition';

import Attach from '@icons/Attach';
import Gif from '@icons/Gif';
import Gift from '@icons/Gift';
import Sticker from '@icons/Sticker';
import TypingDots from '@icons/TypingDots';

import MessageInputButton from '@libs/message/MessageInputButton';

import { MessageType, SentMessage } from '@/types/message';

type Props = {
  /** The name of the channel. Used for message input placeholder */
  channelName: string;
  /** The member names that are currently typing */
  typingMemberNames?: string[];
  /** Function to trigger on send event */
  onSendMessage: (message: SentMessage) => void;
};

const MessageInput: React.FC<Props> = ({
  channelName,
  typingMemberNames,
  onSendMessage,
}) => {
  const [message, setMessage] = useState<string>('');
  const [emojiBackgroundPosition, setEmojiBackgroundPosition] =
    useState<string>('');

  const handleChangeEmojiPlaceholder = useCallback(() => {
    const emojiSize = 22;
    const maxColumns = 10;
    const maxRows = 3;
    setEmojiBackgroundPosition(
      getBoardEmojiBackgroundPosition(maxColumns, maxRows, emojiSize),
    );
  }, []);

  const handleOnInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setMessage(event.target.value.trim()),
    [],
  );

  const handleSendMessage = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSendMessage({
          id: faker.number.int(),
          content: message,
          type: MessageType.TEXT,
          author: 12345,
          sent_at: dayjs().toISOString(),
          username: 'brdtheo',
          thumbnail:
            'https://cdn.discordapp.com/avatars/338044684423397376/3af412869d429758cb9782b7789c8d06.webp',
        });
        setMessage('');
      }
    },
    [message, onSendMessage],
  );

  return (
    <div className="px-4">
      <div className="flex bg-onyx flex-1 rounded-lg text-crestline max-h-[50vh] overflow-y-auto relative scrollbar-thin border-r-4 border-transparent">
        <button className="px-4 py-2.5 hover:text-smoke transition-colors duration-100 ease-in-out h-fit sticky top-0 left-0">
          <Attach />
        </button>

        {!message && (
          <div className="absolute left-14 top-2.5 text-placeholder">
            Message #{channelName}
          </div>
        )}

        <input
          value={message}
          onChange={handleOnInputChange}
          type="text"
          className="flex-1 py-2.5 pr-2.5 bg-transparent overflow-hidden relative break-words outline-none h-fit word-break text-smoke gg-regular"
          onKeyDown={handleSendMessage}
        />

        <div className="flex h-fit sticky top-0 left-0">
          <MessageInputButton icon={<Gift />} />
          <MessageInputButton icon={<Gif />} />
          <MessageInputButton icon={<Sticker />} />
          <div className="mx-1 flex justify-center items-center w-8 h-11">
            <button
              className="h-fit p-1"
              onMouseEnter={handleChangeEmojiPlaceholder}
            >
              <div
                style={{ backgroundPosition: emojiBackgroundPosition }}
                className="bg-[url('img/emoji_board.png')] bg-no-repeat bg-[length:242px_110px] w-[22px] h-[22px] grayscale hover:grayscale-0 hover:scale-125 transition duration-100 ease-in-out"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={clsx('h-6 text-smoke flex items-center', {
          invisible: !typingMemberNames?.length,
        })}
      >
        <span className="ml-2">
          <TypingDots />
        </span>
        <span className="text-sm ml-1">
          <strong>
            {typingMemberNames?.map((memberName, index) => (
              <span key={memberName + index}>
                {memberName}
                {index !== typingMemberNames?.length - 1 && ', '}
              </span>
            ))}
          </strong>{' '}
          <span>
            {typingMemberNames?.length ?? 0 > 1 ? 'are' : 'is'} typing...
          </span>
        </span>
      </div>
    </div>
  );
};

export default MessageInput;
