import { FormEvent, useCallback, useState } from 'react';

import Icon from '@components/Icon';
import getBoardEmojiBackgroundPosition from '@utils/getBoardEmojiBackgroundPosition';

import { IconName } from '@/types/common';

type Props = {
  /** The name of the channel. Used for message input placeholder */
  channelName: string;
  /** The member names that are currently typing */
  typingMemberNames?: string[];
};

type EventTargetWithTextContent = FormEvent<HTMLDivElement> & {
  target: {
    textContent: string;
  };
};

const MessageInput: React.FC<Props> = ({
  channelName,
  typingMemberNames,
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

  const handleMessageInput = useCallback(
    (event: EventTargetWithTextContent) => {
      if (typeof event?.target?.textContent === 'string') {
        setMessage(event.target.textContent);
      }
    },
    [],
  );

  return (
    <div className="px-4">
      <div className="flex bg-onyx flex-1 rounded-lg text-crestline max-h-[50vh] overflow-y-auto relative scrollbar-thin border-r-4 border-transparent">
        <button className="px-4 py-2.5 hover:text-smoke transition-colors duration-100 ease-in-out h-fit sticky top-0 left-0">
          <Icon name={IconName.ATTACH} />
        </button>

        {!message && (
          <div className="absolute left-14 top-2.5 text-placeholder">
            Message #{channelName}
          </div>
        )}

        <div
          className="flex-1 py-2.5 pr-2.5 bg-transparent overflow-hidden relative break-words outline-none h-fit word-break text-smoke"
          spellCheck={false}
          contentEditable
          onInput={handleMessageInput}
        />

        <div className="flex h-fit sticky top-0 left-0">
          <button className="mx-1 flex justify-center items-center w-8 h-11 hover:text-smoke transition-colors duration-100 ease-in-out">
            <Icon name={IconName.GIFT} />
          </button>
          <button className="mx-1 flex justify-center items-center w-8 h-11 hover:text-smoke transition-colors duration-100 ease-in-out">
            <Icon name={IconName.GIF} />
          </button>
          <button className="mx-1 flex justify-center items-center w-8 h-11 hover:text-smoke transition-colors duration-100 ease-in-out">
            <Icon name={IconName.STICKER} />
          </button>
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
        className={`h-6 text-smoke flex items-center ${
          !typingMemberNames?.length && 'invisible'
        }`}
      >
        <span className="ml-2">
          <Icon name={IconName.TYPING_DOTS} />
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
