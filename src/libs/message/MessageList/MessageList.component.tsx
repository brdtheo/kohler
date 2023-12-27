import { useEffect, useRef } from 'react';

import Message from '@libs/message/Message';

import type { SentMessage } from '@libs/message/types';

type Props = {
  /** The messages list passed for rendering */
  messagesList: SentMessage[];
};

const MessageList: React.FC<Props> = ({ messagesList }) => {
  const listRef = useRef<HTMLOListElement | null>(null);
  const listContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef?.current && listContentRef?.current) {
      listRef.current.scrollTo(0, listContentRef.current.scrollHeight);
    }
  }, [messagesList.length]);

  return (
    <ol
      className="flex-1 overflow-y-scroll scrollbar-large border-r-4 border-transparent"
      ref={listRef}
    >
      <div
        className="message-list-height flex flex-col justify-end"
        ref={listContentRef}
      >
        {messagesList.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="h-6 w-1 pointer-events-none" />
    </ol>
  );
};

export default MessageList;
