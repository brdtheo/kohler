import { useMemo } from 'react';

import ChannelListCategory from '@libs/channel/ChannelCategory';

import { Channel } from '@libs/channel/types';

import { ChannelType } from '@libs/server/constants';

type Props = {
  /** All of the available channels for the current member */
  serverChannels: Channel[];
  /** ID of the current selected channel */
  selectedChannel: number;
};

const ChannelList: React.FC<Props> = ({ serverChannels, selectedChannel }) => {
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
      />

      <ChannelListCategory
        categoryName="voice channels"
        categoryChannels={audioChannels}
        selectedChannel={selectedChannel}
      />
    </ul>
  );
};

export default ChannelList;
