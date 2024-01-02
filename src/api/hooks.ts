import { RealtimePostgresInsertPayload } from '@supabase/realtime-js';

import { useAppDispatch } from '@store';

import { messageApi } from '@libs/message/api';

import { Member } from '@libs/member/types';
import { Message, SentMessage } from '@libs/message/types';

export const useMessageInsertEvent = () => {
  const dispatch = useAppDispatch();

  /*
   * Since Supabase does not support GraphQL subscriptions nor join data in the payload
   * we retrieve the missing data from the cache
   */
  const handleEvent = (
    payload: RealtimePostgresInsertPayload<Message>,
    serverMembers: Member[],
    selectedChannelId: string,
  ) => {
    const messageMember = serverMembers.find(
      (member) => member.user.id === payload.new.author_id.toString(),
    );

    !!messageMember &&
      dispatch(
        messageApi.util.updateQueryData(
          'getMessageList',
          selectedChannelId,
          (draftMessages) => {
            const newMessage: SentMessage = {
              ...payload.new,
              user: {
                id: messageMember.user.id,
                thumbnail: messageMember.user.thumbnail,
                username: messageMember.user.username,
              },
              member: {
                display_name: messageMember.display_name,
              },
            };
            draftMessages.push(newMessage);
          },
        ),
      );
  };

  return handleEvent;
};
