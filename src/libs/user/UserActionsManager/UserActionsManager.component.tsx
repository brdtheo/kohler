import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store';

import getMemberStatusText from '@utils/getMemberStatusText';

import AudioWave from '@icons/AudioWave';
import Disconnect from '@icons/Disconnect';
import Headset from '@icons/Headset';
import HeadsetDeafened from '@icons/HeadsetDeafened';
import Microphone from '@icons/Microphone';
import MicrophoneMuted from '@icons/MicrophoneMuted';
import Settings from '@icons/Settings';

import Avatar from '@components/Avatar';

import ConnectionStatus from '@libs/connection/ConnectionStatus';
import UserActionsManagerButton from '@libs/user/UserActionsManagerButton';
import { userApi } from '@libs/user/api';

import { User } from '@libs/user/types';

type Props = {
  /** The name of the server, displayed when active RTC */
  serverName: string;
  /** The name of the channel, displayed when active RTC */
  channelName: string;
};

const UserActionsManager: React.FC<Props> = ({ serverName, channelName }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafen, setIsDeafen] = useState(false);
  const [hasCurrentConnection] = useState(false);

  const currentUserEmail = useSelector((state: RootState) => state.auth.email);

  const currentUser = userApi.endpoints.getUser.useQueryState(
    currentUserEmail,
    {
      selectFromResult: (response) => response.data as User,
    },
  );

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
                tooltipText="Noise Suppression powered by Krisp"
                icon={<AudioWave />}
                onClick={() => {}}
              />
              <UserActionsManagerButton
                tooltipText="Disconnect"
                icon={<Disconnect />}
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
            thumbnail={currentUser?.thumbnail}
            status={currentUser?.status}
            isPreventTooltip
          />
          <div className="flex-1 overflow-hidden flex flex-col py-1 pl-2 max-w-[84px]">
            <span className="text-sm leading-[18px] gg-regular text-smoke flex-1 text-left whitespace-nowrap overflow-hidden text-ellipsis">
              {currentUser?.username}
            </span>
            <span className="text-crestline leading-4 gg-regular text-xs text-left whitespace-nowrap overflow-hidden text-ellipsis">
              {getMemberStatusText(currentUser?.status)}
            </span>
          </div>
        </button>

        <div className="flex">
          <UserActionsManagerButton
            tooltipText={isMuted ? 'Unmute' : 'Mute'}
            icon={isMuted ? <MicrophoneMuted /> : <Microphone />}
            onClick={handleToggleMute}
          />
          <UserActionsManagerButton
            tooltipText={isDeafen ? 'Undeafen' : 'Deafen'}
            icon={isDeafen ? <HeadsetDeafened /> : <Headset />}
            onClick={handleToggleDeafen}
          />
          <UserActionsManagerButton
            tooltipText="User Settings"
            icon={<Settings />}
            onClick={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default UserActionsManager;
