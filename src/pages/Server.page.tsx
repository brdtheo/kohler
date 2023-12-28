import { faker } from '@faker-js/faker';
import { RootState } from '@store';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@components/AppBar';
import Sidebar from '@components/Sidebar';

import { useGetChannelListQuery } from '@libs/channel/api';
import { setSelectedChannel } from '@libs/channel/channelSlice';
import MembersList from '@libs/member/MembersList';
import ServerActivity from '@libs/server/ServerActivity';
import ServerBrowser from '@libs/server/ServerBrowser';

import { Member } from '@libs/member/types';
import { SentMessage } from '@libs/message/types';
import { User } from '@libs/user/types';

import { UserStatus } from '@libs/user/constants';

const _TEMP_MEMBERS_LIST: Member[] = [
  {
    id: faker.number.int(1000),
    server_id: 12345,
    user_id: 14,
    joined_at: new Date().toISOString(),
    status: UserStatus.ONLINE,
    username: 'brdtheo',
    thumbnail:
      'https://cdn.discordapp.com/avatars/338044684423397376/3af412869d429758cb9782b7789c8d06.webp',
  },
  {
    id: faker.number.int(1000),
    server_id: 12345,
    user_id: 15,
    joined_at: faker.date.recent().toDateString(),
    status: UserStatus.DO_NOT_DISTURB,
    username: 'wumpus',
    thumbnail: 'https://cdn3.emoji.gg/emojis/5325-wumpus.png',
  },
];

const _TEMP_MESSAGES_LIST: SentMessage[] = new Array(20).fill(0).map(() => ({
  id: faker.number.int(1000),
  content: faker.lorem.words({ min: 6, max: 50 }),
  type: 'text',
  author: faker.number.int(1000),
  sent_at: dayjs(faker.date.recent()).toISOString(),
  username: faker.internet.userName(),
  thumbnail: faker.helpers.arrayElement([faker.internet.avatar(), undefined]),
}));

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
  const [messages, setMessages] = useState<SentMessage[]>(_TEMP_MESSAGES_LIST);

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

  /* HANDLERS */
  const toggleMemberList = useCallback(
    () => setIsMembersListOpen((state) => !state),
    [],
  );

  const handleSendMessage = useCallback(
    (message: SentMessage) => setMessages([...messages, message]),
    [messages],
  );

  useEffect(() => {
    if (channelList && channelList?.length > 0 && !selectedChannel) {
      dispatch(setSelectedChannel(channelList[0]));
    }
  }, [channelList, dispatch, selectedChannel]);

  return (
    <div className="flex w-full h-screen">
      <ServerBrowser />

      {selectedServer && (
        <>
          {!!channelList && channelList.length > 0 && (
            <Sidebar
              userStatus={_TEMP_USER.status}
              userName={_TEMP_USER.username}
              channelName={channelList[0].name}
              serverName={selectedServer.name}
              serverChannels={channelList}
              selectedChannel={selectedChannel?.id || 0}
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
                messagesList={messages}
                onSendMessage={handleSendMessage}
              />
              <MembersList
                isOpen={isMembersListOpen}
                members={_TEMP_MEMBERS_LIST}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServerPage;
