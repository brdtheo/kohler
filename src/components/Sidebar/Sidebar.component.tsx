import SidebarHeader from '@components/SidebarHeader';

import ChannelBrowser from '@libs/channel/ChannelBrowser';
import UserActionsManager from '@libs/user/UserActionsManager';

import { Channel } from '@libs/channel/types';

type Props = {
  /** The name of the server displayed in the sidebar header and RTC state */
  serverName: string;
  /** Available server channels */
  serverChannels: Channel[];
  /** The name of the channel, displayed when active RTC */
  channelName: string;
  /** ID of the current selected channel */
  selectedChannel: string;
};

const Sidebar: React.FC<Props> = ({
  serverName,
  serverChannels,
  channelName,
  selectedChannel,
}) => (
  <nav className="bg-caviar w-60 flex flex-col">
    <SidebarHeader serverName={serverName} />

    {serverChannels?.length > 0 ? (
      <ChannelBrowser
        serverChannels={serverChannels}
        selectedChannel={selectedChannel}
      />
    ) : (
      <div className="flex-1 pr-2" />
    )}

    <UserActionsManager serverName={serverName} channelName={channelName} />
  </nav>
);

export default Sidebar;
