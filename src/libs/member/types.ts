import { User } from '@/types/user';

export type Member = Pick<User, 'status' | 'thumbnail' | 'username'> & {
  /** Member ID */
  id: number;
  /** ID of the server the User is in */
  server_id: number;
  /** User ID related to this member */
  user_id: number;
  /** The optional custom username of the Member in the server */
  display_name?: string;
  /** Date when the member first joined the server */
  joined_at: string;
};
