import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';

import AppBar from '@components/AppBar';
import Sidebar from '@components/Sidebar';

import ServerMembersList from '@libs/member/MembersList';
import ServerActivity from '@libs/server/ServerActivity';
import ServerBrowser from '@libs/server/ServerBrowser';

import { MessageType, SentMessage } from '@/types/message';
import {
  ChannelType,
  Server,
  ServerChannel,
  ServerMember,
} from '@/types/server';
import { User, UserStatus } from '@/types/user';

const _TEMP_SERVER_LIST: Server[] = [
  {
    id: 1,
    name: 'Counter-Strike 2',
    thumbnail: 'https://i.redd.it/jfr58wvzl5db1.jpg',
    created_at: dayjs(faker.date.recent()).toISOString(),
    invite_code: faker.string.alphanumeric({ length: 6 }),
  },
  {
    id: 2,
    name: 'Wumpus and friends',
    thumbnail: 'https://i.redd.it/pptk3al4l0j71.jpg',
    created_at: dayjs(faker.date.recent()).toISOString(),
    invite_code: faker.string.alphanumeric({ length: 6 }),
  },
  {
    id: 3,
    name: 'Duolingo',
    thumbnail:
      'https://static.wixstatic.com/media/24bb9b_bac9c76ca749476bb314752df0970ac2~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/24bb9b_bac9c76ca749476bb314752df0970ac2~mv2.png',
    created_at: dayjs(faker.date.recent()).toISOString(),
    invite_code: faker.string.alphanumeric({ length: 6 }),
  },
];

const _TEMP_SERVER_CHANNEL: ServerChannel = {
  id: 1,
  name: 'general',
  type: ChannelType.TEXT,
};

const _TEMP_MEMBERS_LIST: ServerMember[] = [
  {
    id: 111,
    server_id: 12345,
    user_id: 14,
    joined_at: new Date().toISOString(),
    status: UserStatus.ONLINE,
    username: 'brdtheo',
    thumbnail:
      'https://cdn.discordapp.com/avatars/338044684423397376/3af412869d429758cb9782b7789c8d06.webp',
  },
  {
    id: 222,
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
  type: MessageType.TEXT,
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

export default function App() {
  const [isMembersListOpen, setIsMembersListOpen] = useState(true);
  const [messages, setMessages] = useState<SentMessage[]>(_TEMP_MESSAGES_LIST);

  const toggleMemberList = useCallback(
    () => setIsMembersListOpen((state) => !state),
    [],
  );

  const handleSendMessage = (message: SentMessage) =>
    setMessages([...messages, message]);

  return (
    <div className="flex w-full h-screen">
      <ServerBrowser serverList={_TEMP_SERVER_LIST} />

      <Sidebar
        userStatus={_TEMP_USER.status}
        userName={_TEMP_USER.username}
        channelName={_TEMP_SERVER_CHANNEL.name}
        serverName={_TEMP_SERVER_LIST[1].name}
      />

      <div className="flex-1 bg-gray-700 overflow-hidden">
        <AppBar
          title={_TEMP_SERVER_CHANNEL.name}
          onShowMembersList={toggleMemberList}
        />
        <div className="flex flex-1 h-full-app-bar">
          <ServerActivity
            channelName={_TEMP_SERVER_CHANNEL.name}
            messagesList={messages}
            onSendMessage={handleSendMessage}
          />
          <ServerMembersList
            isOpen={isMembersListOpen}
            members={_TEMP_MEMBERS_LIST}
          />
        </div>
      </div>
    </div>
  );
}
