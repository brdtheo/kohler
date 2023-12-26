import ChannelList from '@libs/channel/ChannelList';

import { ServerChannel } from '@/types/server';

type Props = {
  /** ID of the current server */
  serverId: string;
  /** All of the available channels for the current member */
  serverChannels: ServerChannel[];
  /** ID of the current selected channel */
  selectedChannel: number;
};

const ChannelBrowser: React.FC<Props> = ({
  serverId,
  serverChannels,
  selectedChannel,
}) => (
  <div className="flex-1 pr-2">
    <ChannelList
      serverId={serverId}
      serverChannels={serverChannels}
      selectedChannel={selectedChannel}
    />
  </div>
);

export default ChannelBrowser;
