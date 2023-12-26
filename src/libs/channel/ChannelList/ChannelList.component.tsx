import { useMemo } from 'react';

import ChannelListCategory from '@libs/channel/ChannelCategory';

import { ChannelType, ServerChannel } from '@/types/server';

type Props = {
  /** ID of the current server */
  serverId: string;
  /** All of the available channels for the current member */
  serverChannels: ServerChannel[];
  /** ID of the current selected channel */
  selectedChannel: number;
};

const ChannelList: React.FC<Props> = ({
  serverId,
  serverChannels,
  selectedChannel,
}) => {
  const textChannels = useMemo(
    () => serverChannels.filter((channel) => channel.type === ChannelType.TEXT),
    [serverChannels],
  );

  const audioChannels = useMemo(
    () =>
      serverChannels.filter((channel) => channel.type === ChannelType.AUDIO),
    [serverChannels],
  );

  return (
    <ul className="relative">
      <ChannelListCategory
        categoryName="text channels"
        categoryChannels={textChannels}
        selectedChannel={selectedChannel}
        serverId={serverId}
      />

      <ChannelListCategory
        categoryName="voice channels"
        categoryChannels={audioChannels}
        selectedChannel={selectedChannel}
        serverId={serverId}
      />
    </ul>
  );
};

export default ChannelList;
