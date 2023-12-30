import useMessageDateTime from '@hooks/useMesageTime';

import Avatar from '@components/Avatar';

import type { SentMessage } from '@libs/message/types';

type Props = {
  /** The sent message object */
  message: SentMessage;
};

const Message: React.FC<Props> = ({ message }) => {
  const messageSentDate = useMessageDateTime(message.sent_at);

  return (
    <li className="w-full relative">
      <div className="pl-18 pr-12 py-1 mt-3.5 flex relative hover:bg-charcoal">
        <button className="absolute top-2 left-4 cursor-pointer">
          <Avatar
            thumbnail={message.users.thumbnail}
            size="large"
            isStatusHidden
          />
        </button>

        <div>
          <div className="flex items-center">
            <h3 className="text-smoke gg-medium leading-[22px] mr-1 cursor-pointer hover:underline">
              {message.users.username}
            </h3>
            <span className="text-placeholder text-xs ml-1 cursor-default">
              {messageSentDate}
            </span>
          </div>

          <span className="text-iron gg-regular">{message.content}</span>
        </div>
      </div>
    </li>
  );
};

export default Message;
