import MessageList from '@libs/message/MessageList';
import MessageInput from '@libs/message/MessageInput';

import { SentMessage } from '@/types/message';

type Props = {
  /** The name of the channel. Used for message input placeholder */
  channelName: string;
  /** The messages list passed for rendering */
  messagesList: SentMessage[];
  onSendMessage: (message: SentMessage) => void;
};

const ServerActivity: React.FC<Props> = ({
  channelName,
  messagesList,
  onSendMessage,
}) => (
  <div className="flex flex-1 bg-ebony flex-col">
    <MessageList messagesList={messagesList} />
    <MessageInput channelName={channelName} onSendMessage={onSendMessage} />
  </div>
);

export default ServerActivity;
