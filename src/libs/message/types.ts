import { Member } from '@libs/member/types';
import { User } from '@libs/user/types';

import { MessageType } from './constants';

export type Message = {
  /** Message ID */
  id: number;
  /** Content of the Message: text can be used as well as images files */
  content: string;
  /** Type of the messagge of the Message: text can be used as well as images files */
  type: `${MessageType}`;
  /** ID of the User who sent the Message */
  author: number;
  /** Date when the Member sent the Message */
  sent_at: string;
};

export type SentMessage = Pick<User, 'thumbnail' | 'username'> &
  Pick<Member, 'display_name'> & {
    /** Message ID */
    id: number;
    /** Content of the Message: text can be used as well as images files */
    content: string;
    /** Type of the messagge of the Message: text can be used as well as images files */
    type: `${MessageType}`;
    /** ID of the User who sent the Message */
    author: number;
    /** Date when the Member sent the Message */
    sent_at: string;
  };
