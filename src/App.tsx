import { useCallback, useState } from 'react';
import dayjs from 'dayjs';

import ServerBrowser from '@libs/server/ServerBrowser';
import AppBar from '@components/AppBar';
import ServerMembersList from '@libs/member/MembersList';
import ServerActivity from '@libs/server/ServerActivity';

import {
  Server,
  ServerChannel,
  ChannelType,
  ServerMember,
} from '@/types/server';
import { MessageType, SentMessage } from '@/types/message';
import { UserStatus } from '@/types/user';
import { faker } from '@faker-js/faker';

const _TEMP_SERVER_LIST: Server[] = [
  {
    id: 1,
    name: 'CS2',
    thumbnail: 'https://i.redd.it/jfr58wvzl5db1.jpg',
    created_at: '',
    invite_code: '',
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
  thumbnail: faker.internet.avatar(),
}));

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
