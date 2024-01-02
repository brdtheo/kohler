import { User } from '@libs/user/types';

export type Member = {
  /** Member ID */
  id: string;
  /** ID of the server the User is in */
  server_id: string;
  /** User ID related to this member */
  user_id: string;
  /** The optional custom username of the Member in the server */
  display_name?: string;
  /** Date when the member first joined the server */
  joined_at: string;
  /** Data took from the Users collection */
  user: Pick<User, 'id' | 'status' | 'thumbnail' | 'username'>;
};
