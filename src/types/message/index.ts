import { Member } from '@/types/member';
import { User } from '@/types/user';

enum MessageType {
  /** A text messsage */
  TEXT = 'text',
  /** A messsage containing any file */
  FILE = 'file',
  /** A messsage containing a sticker */
  STICKER = 'sticker',
  /** A messsage integrating a GIF from Tenor */
  GIF = 'gif',
}

type Message = {
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

type SentMessage = Pick<User, 'thumbnail' | 'username'> &
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

export { MessageType };
export type { Message, SentMessage };
