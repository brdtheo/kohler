import SidebarHeader from '@components/SidebarHeader';

import ChannelBrowser from '@libs/channel/ChannelBrowser';
import UserActionsManager from '@libs/user/UserActionsManager';

import { Channel } from '@libs/channel/types';

import { UserStatus } from '@libs/user/constants';

type Props = {
  /** The name of the server displayed in the sidebar header and RTC state */
  serverName: string;
  /** Available server channels */
  serverChannels: Channel[];
  /** The user status; used to display the color within the avatar */
  userStatus: UserStatus;
  /** User name displayed next to the avatar */
  userName: string;
  /** The name of the channel, displayed when active RTC */
  channelName: string;
  /** ID of the current selected channel */
  selectedChannel: string;
};

const Sidebar: React.FC<Props> = ({
  userStatus,
  userName,
  serverName,
  serverChannels,
  channelName,
  selectedChannel,
}) => (
  <nav className="bg-caviar w-60 flex flex-col">
    <SidebarHeader serverName={serverName} />

    {serverChannels?.length > 0 && (
      <>
        <ChannelBrowser
          serverChannels={serverChannels}
          selectedChannel={selectedChannel}
        />

        <UserActionsManager
          userStatus={userStatus}
          userName={userName}
          serverName={serverName}
          channelName={channelName}
        />
      </>
    )}
  </nav>
);

export default Sidebar;
