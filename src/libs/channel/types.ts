import { ChannelType } from '@libs/server/constants';

export type ChannelRootState = {
  /** When fetching server channels the oldest one is selected */
  selectedChannel: Channel | null;
};

export type Channel = {
  /** Channel ID */
  id: string;
  /** Channel name */
  name: string;
  /** Channel description */
  description?: string;
  /** Channel type which is one of `ChannelType`: 'text' or 'audio'  */
  type: `${ChannelType}`;
};
