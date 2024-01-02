import { Member } from '@libs/member/types';
import { User } from '@libs/user/types';

import { MessageType } from './constants';

export type Message = {
  /** Message ID */
  id: string;
  /** Content of the Message: text can be used as well as images files */
  content: string;
  /** Type of the Message: text can be used as well as images files */
  type: `${MessageType}`;
  /** ID of the User who sent the Message */
  author_id: string;
  /** ID of the Channel the message has been sent */
  channel_id: string;
  /** ID of the Member who sent the Message */
  member_id: string;
  /** Date when the Member sent the Message */
  sent_at: string;
};

export type MessageInput = Omit<Message, 'id'>;

export type SentMessage = Message & {
  user: Pick<User, 'id' | 'thumbnail' | 'username'>;
  member: Pick<Member, 'display_name'>;
};
