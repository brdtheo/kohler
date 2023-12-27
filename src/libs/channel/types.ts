import { ChannelType } from '@libs/server/constants';

export type Channel = {
  /** Channel ID */
  id: number;
  /** Channel name */
  name: string;
  /** Channel description */
  description?: string;
  /** Channel type which is one of `ChannelType`: 'text' or 'audio'  */
  type: `${ChannelType}`;
};
