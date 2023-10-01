type User = {
  /** User ID */
  id: number;
  /** Unique email associated with this User */
  email: string;
  /** Username associated with this User (can be replaced by `display_name` in Server) */
  username: string;
  /** Date when the user signed up to Kohler */
  created_at: string;
};

export type { User };
