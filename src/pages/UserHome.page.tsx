import { useSelector } from 'react-redux';

import { RootState } from '@store';

import Sidebar from '@components/Sidebar';

import ServerBrowser from '@libs/server/ServerBrowser';

const UserHomePage: React.FC = () => {
  const selectedChannel = useSelector(
    (state: RootState) => state.channel.selectedChannel,
  );

  return (
    <div className="flex w-full h-screen bg-ebony">
      <ServerBrowser />

      <Sidebar
        channelName=""
        serverName="Direct messages"
        serverChannels={[]}
        selectedChannel={selectedChannel?.id || ''}
      />
    </div>
  );
};

export default UserHomePage;
