export type ServerRootState = {
  /** If the user clicked on a button from the nav, the selected index will be stored */
  serverBrowserIndex: number;
  selectedServer: Server | null;
};

export type Server = {
  /** Server ID */
  id: string;
  /** Name of the Server. Can be updated anytime*/
  name: string;
  /** The optional Server thumbnail shown in the server browser */
  thumbnail?: string;
  /** Date when the Server has been created */
  created_at: string;
  /** Date when the last change has been made to the Server */
  updated_at?: string;
  /** The server unique invite code */
  invite_code: string;
};
