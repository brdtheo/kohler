enum UserStatus {
  OFFLINE = 0,
  ONLINE = 1,
  IDLE = 2,
  DO_NOT_DISTURB = 3,
}

type User = {
  /** User ID */
  id: number;
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

export { UserStatus };
export type { User };
