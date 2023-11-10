import UserActionsManager from '@libs/user/UserActionsManager';

import { UserStatus } from '@/types/user';

type Props = {
  /** The name of the server displayed in the sidebar header and RTC state */
  serverName: string;
  /** The user status; used to display the color within the avatar */
  userStatus: UserStatus;
  /** User name displayed next to the avatar */
  userName: string;
  /** The name of the channel, displayed when active RTC */
  channelName: string;
};

const Sidebar: React.FC<Props> = ({
  userStatus,
  userName,
  serverName,
  channelName,
}) => {
  return (
    <div className="bg-caviar w-60 flex flex-col">
      <div className="flex-1 text-smoke" />

      <UserActionsManager
        userStatus={userStatus}
        userName={userName}
        serverName={serverName}
        channelName={channelName}
      />
    </div>
  );
};

export default Sidebar;
