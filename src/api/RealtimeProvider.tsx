import { RealtimeClient } from '@supabase/realtime-js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@store';

import { useMessageInsertEvent } from '@api/hooks';

import { memberApi } from '@libs/member/api';

import { Message } from '@libs/message/types';

type Props = {
  children: React.ReactElement;
};

const realtimeClient = new RealtimeClient(
  import.meta.env.VITE_BASE_REALTIME_URL,
  {
    params: {
      apikey: import.meta.env.VITE_SUPABASE_API_KEY,
    },
  },
);

/** Provides all of the handlers for realtime events from Supabase
 *
 * See more in the docs https://supabase.com/docs/guides/realtime
 */
const RealtimeProvider: React.FC<Props> = ({ children }) => {
  const messageEventHandler = useMessageInsertEvent();

  const selectedChannel = useSelector(
    (state: RootState) => state.channel.selectedChannel,
  );
  const selectedServerId = useSelector(
    (state: RootState) => state.server.selectedServer?.id,
  );

  const serverMembers = memberApi.endpoints.getMemberList.useQueryState(
    selectedServerId ?? '',
  )?.data;

  useEffect(() => {
    const messagesChannel = realtimeClient.channel('messages');

    /* Watch for INSERT changes in table message */
    if (serverMembers && selectedChannel) {
      messagesChannel.on<Message>(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'message' },
        (payload) =>
          messageEventHandler(payload, serverMembers, selectedChannel.id),
      );
    }

    /* Subscribe to all channels and watch for any event */
    messagesChannel.subscribe();

    /* Unsubscribe from all current channels when changing route */
    return () => {
      messagesChannel.unsubscribe();
    };
  }, [messageEventHandler, selectedChannel, serverMembers]);

  return <>{children}</>;
};

export default RealtimeProvider;
