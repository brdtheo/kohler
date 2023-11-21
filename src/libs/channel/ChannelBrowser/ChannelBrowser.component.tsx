import ChannelList from '@libs/channel/ChannelList';

import { ServerChannel } from '@/types/server';

type Props = {
  serverId: number;
  serverChannels: ServerChannel[];
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
