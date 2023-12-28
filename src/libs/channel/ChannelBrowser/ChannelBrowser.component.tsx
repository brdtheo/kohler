import ChannelList from '@libs/channel/ChannelList';

import { Channel } from '@libs/channel/types';

type Props = {
  /** All of the available channels for the current member */
  serverChannels: Channel[];
  /** ID of the current selected channel */
  selectedChannel: number;
};

const ChannelBrowser: React.FC<Props> = ({
  serverChannels,
  selectedChannel,
}) => (
  <div className="flex-1 pr-2">
    <ChannelList
      serverChannels={serverChannels}
      selectedChannel={selectedChannel}
    />
  </div>
);

export default ChannelBrowser;
