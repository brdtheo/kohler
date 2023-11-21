import SidebarHeader from '@components/SidebarHeader';

import ChannelBrowser from '@libs/channel/ChannelBrowser/ChannelBrowser.component';
import UserActionsManager from '@libs/user/UserActionsManager';

import { ServerChannel } from '@/types/server';
import { UserStatus } from '@/types/user';

type Props = {
  /** The name of the server displayed in the sidebar header and RTC state */
  serverName: string;
  /** The current server id. Used to navigate in channels */
  serverId: number;
  /** Available server channels */
  serverChannels: ServerChannel[];
  /** The user status; used to display the color within the avatar */
  userStatus: UserStatus;
  /** User name displayed next to the avatar */
  userName: string;
  /** The name of the channel, displayed when active RTC */
  channelName: string;
  selectedChannel: number;
};

const Sidebar: React.FC<Props> = ({
  userStatus,
  userName,
  serverName,
  serverId,
  serverChannels,
  channelName,
  selectedChannel,
}) => {
  console.log(location);

  return (
    <nav className="bg-caviar w-60 flex flex-col">
      <SidebarHeader serverName={serverName} />

      <ChannelBrowser
        serverId={serverId}
        serverChannels={serverChannels}
        selectedChannel={selectedChannel}
      />

      <UserActionsManager
        userStatus={userStatus}
        userName={userName}
        serverName={serverName}
        channelName={channelName}
      />
    </nav>
  );
};

export default Sidebar;
