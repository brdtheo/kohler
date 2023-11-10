import { useCallback, useState } from 'react';

import Avatar from '@components/Avatar';
import UserActionsManagerButton from '@libs/user/UserActionsManagerButton';
import getMemberStatusText from '@utils/getMemberStatusText';
import ConnectionStatus from '@libs/connection/ConnectionStatus';

import { IconName } from '@/types/common';
import { UserStatus } from '@/types/user';

type Props = {
  /** The user status; used to display the color within the avatar */
  userStatus: UserStatus;
  /** User name displayed next to the avatar */
  userName: string;
  /** The name of the server, displayed when active RTC */
  serverName: string;
  /** The name of the channel, displayed when active RTC */
  channelName: string;
};

const UserActionsManager: React.FC<Props> = ({
  userStatus,
  userName,
  serverName,
  channelName,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafen, setIsDeafen] = useState(false);
  const [hasCurrentConnection] = useState(false);

  const handleToggleMute = useCallback(() => {
    if (isDeafen && isMuted) {
      setIsMuted(false);
      setIsDeafen(false);
    } else if (!isDeafen && isMuted) {
      setIsMuted(false);
    } else {
      setIsMuted((state) => !state);
    }
  }, [isDeafen, isMuted]);

  const handleToggleDeafen = useCallback(() => {
    if (!isMuted) {
      setIsMuted(true);
      setIsDeafen(true);
    } else {
      setIsDeafen((state) => !state);
    }
  }, [isMuted]);

  return (
    <section className="bg-gunmetal w-full flex flex-col items-center">
      {hasCurrentConnection && (
        <div className="w-full flex items-center border-b border-onyx p-2">
          <div className="w-full flex items-center h-[38px]">
            <div className="flex flex-col flex-1 select-none">
              <ConnectionStatus />
              <div className="w-[150px] gg-regular text-crestline leading-1 text-xs text-left whitespace-nowrap overflow-hidden text-ellipsis">
                {channelName} / {serverName}
              </div>
            </div>

            <div className="flex">
              <UserActionsManagerButton
                iconName={IconName.AUDIO_WAVE}
                onClick={() => {}}
              />
              <UserActionsManagerButton
                iconName={IconName.DISCONNECT}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex items-center h-[53px] px-2">
        <button
          type="button"
          className="flex items-center flex-1 mr-2 ml-[-2px] pl-[2px] hover:bg-smoke hover:bg-opacity-10 rounded"
        >
          <Avatar
            thumbnail="https://cdn.discordapp.com/avatars/338044684423397376/3af412869d429758cb9782b7789c8d06.webp"
            status={userStatus}
            isPreventTooltip
          />
          <div className="flex-1 overflow-hidden flex flex-col py-1 pl-2 max-w-[84px]">
            <span className="text-sm leading-[18px] gg-regular text-smoke flex-1 text-left whitespace-nowrap overflow-hidden text-ellipsis">
              {userName}
            </span>
            <span className="text-crestline leading-4 gg-regular text-xs text-left whitespace-nowrap overflow-hidden text-ellipsis">
              {getMemberStatusText(userStatus)}
            </span>
          </div>
        </button>

        <div className="flex">
          <UserActionsManagerButton
            iconName={isMuted ? IconName.MICROPHONE_MUTED : IconName.MICROPHONE}
            onClick={handleToggleMute}
          />
          <UserActionsManagerButton
            iconName={isDeafen ? IconName.HEADSET_DEAFEN : IconName.HEADSET}
            onClick={handleToggleDeafen}
          />
          <UserActionsManagerButton
            iconName={IconName.SETTINGS}
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default UserActionsManager;
