import { UserStatus } from './constants';

export type User = {
  /** User ID */
  id: string;
  /** Unique email associated with this User */
  email: string;
  /** Username associated with this User (can be replaced by `display_name` in Server) */
  username: string;
  /** The current status of the User. Can also be set manually */
  status: UserStatus;
  /** An optional avatar picture */
  thumbnail?: string;
  /** An optional profile description. Will partially be shown in the server members list  */
  bio?: string;
  /** Date when the user signed up to Kohler */
  created_at: string;
};
