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

enum ChannelType {
  /** A text-based channel */
  TEXT = 'text',
  /** An audio-based channel (WebRTC) */
  AUDIO = 'audio',
}

type ServerChannel = {
  /** Channel ID */
  id: number;
  /** Channel name */
  name: string;
  /** Channel description */
  description?: string;
  /** Channel type which is one of `ChannelType`: 'text' or 'audio'  */
  type: `${ChannelType}`;
};

export { ChannelType };
export type { Server, ServerChannel };
