type Server = {
  /** Server ID */
  id: number;
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

type ServerMember = {
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

enum ChannelType {
  /** A text-based channel */
  TEXT = "text",
  /** An audio-based channel (WebRTC) */
  AUDIO = "audio",
}

type ServerChannel = {
  /** Channel ID */
  id: number;
  /** Channel name */
  name: string;
  /** Channel description */
  description?: string;
  /** Channel type which is one of `ChannelType`: 'text' or 'audio'  */
  type: ChannelType;
};

type ServerMessage = {
  /** Message ID */
  id: number;
  /** Content of the Message: text can be used as well as images files */
  content: string;
  /** ID of the User who sent the Message */
  author: number;
  /** Date when the Member sent the Message */
  sent_at: string;
};

export type { Server, ServerChannel, ServerMember, ServerMessage };
