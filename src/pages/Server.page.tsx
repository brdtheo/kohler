import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from '@store';

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

const ServerPage: React.FC = () => {
  const dispatch = useAppDispatch();
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
    selectedServer?.id ?? '',
  );
  const { data: memberList } = useGetMemberListQuery(selectedServer?.id ?? '');
  const { data: messageList } = useGetMessageListQuery(
    selectedChannel?.id ?? '',
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
