import Message from '@libs/message/Message';

import type { SentMessage } from '@/types/message';

type Props = {
  /** The messages list passed for rendering */
  messagesList: SentMessage[];
};

const MessageList: React.FC<Props> = ({ messagesList }) => {
  return (
    <ol className="flex-1 overflow-y-scroll scrollbar-large border-r-4 border-transparent">
      <div className="message-list-height flex flex-col justify-end">
        {messagesList.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="h-6 w-1 pointer-events-none" />
    </ol>
  );
};

export default MessageList;
