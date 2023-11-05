import UserActionsManager from '@libs/user/UserActionsManager';

import { UserStatus } from '@/types/user';

type Props = {
  /** The name of the server displayed in the sidebar header */
  serverName?: string;
  /** The user status; used to display the color within the avatar */
  userStatus: UserStatus;
  /** User name displayed next to the avatar */
  userName: string;
};

const Sidebar: React.FC<Props> = ({ userStatus, userName }) => {
  return (
    <div className="bg-caviar w-60 flex flex-col">
      <div className="flex-1 text-smoke" />

      <UserActionsManager userStatus={userStatus} userName={userName} />
    </div>
  );
};

export default Sidebar;
