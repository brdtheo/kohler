import { faker } from '@faker-js/faker';
import { RootState } from '@store';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@components/AppBar';
import Sidebar from '@components/Sidebar';

import { useGetChannelListQuery } from '@libs/channel/api';
import { setSelectedChannel } from '@libs/channel/channelSlice';
import MembersList from '@libs/member/MembersList';
import { useGetMemberListQuery } from '@libs/member/api';
import {
  useCreateMessageMutation,
  useGetMessageListQuery,
} from '@libs/message/api';
import ServerActivity from '@libs/server/ServerActivity';
import ServerBrowser from '@libs/server/ServerBrowser';

import { MessageInput } from '@libs/message/types';
import { User } from '@libs/user/types';

import { UserStatus } from '@libs/user/constants';

const _TEMP_USER: User = {
  id: faker.number.int(1000),
  email: faker.internet.email(),
  username: 'brdtheo',
  status: UserStatus.DO_NOT_DISTURB,
  thumbnail:
    'https://cdn.discordapp.com/avatars/338044684423397376/3af412869d429758cb9782b7789c8d06.webp',
  bio: undefined,
  created_at: faker.date.recent().toDateString(),
};

const ServerPage: React.FC = () => {
  const dispatch = useDispatch();
  const [isMembersListOpen, setIsMembersListOpen] = useState(true);

  /* SELECTORS */
  const selectedServer = useSelector(
    (state: RootState) => state.server.selectedServer,
  );
  const selectedChannel = useSelector(
    (state: RootState) => state.channel.selectedChannel,
  );

  /* API QUERIES */
  const { data: channelList } = useGetChannelListQuery(
    selectedServer ? parseInt(selectedServer.id, 10) : 0,
  );
  const { data: memberList } = useGetMemberListQuery(
    selectedServer ? parseInt(selectedServer.id, 10) : 0,
  );
  const { data: messageList } = useGetMessageListQuery(
    selectedChannel ? parseInt(selectedChannel.id, 10) : 0,
  );

  /* API MUTATIONS */
  const [createMessage] = useCreateMessageMutation();

  //   console.log(result);

  /* HANDLERS */
  const toggleMemberList = useCallback(
    () => setIsMembersListOpen((state) => !state),
    [],
  );

  const handleSendMessage = useCallback(
    (message: MessageInput) => createMessage(message),
    [createMessage],
  );

  useEffect(() => {
    if (channelList && channelList?.length > 0 && !selectedChannel) {
      dispatch(setSelectedChannel(channelList[0]));
    }
  }, [channelList, dispatch, selectedChannel]);

  return (
    <div className="flex w-full h-screen">
      <ServerBrowser />

      {!!selectedServer && (
        <>
          {!!channelList && channelList.length > 0 && (
            <Sidebar
              userStatus={_TEMP_USER.status}
              userName={_TEMP_USER.username}
              channelName={channelList[0].name}
              serverName={selectedServer.name}
              serverChannels={channelList}
              selectedChannel={selectedChannel?.id || ''}
            />
          )}

          <div className="flex-1 bg-gray-700 overflow-hidden">
            <AppBar
              title={selectedChannel?.name || ''}
              subtitle={selectedChannel?.description}
              onShowMembersList={toggleMemberList}
            />
            <div className="flex flex-1 h-full-app-bar">
              <ServerActivity
                channelName={selectedChannel?.name || ''}
                messagesList={messageList || []}
                onSendMessage={handleSendMessage}
              />
              {!!memberList && (
                <MembersList isOpen={isMembersListOpen} members={memberList} />
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServerPage;
