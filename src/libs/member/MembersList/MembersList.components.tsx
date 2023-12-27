import { useMemo } from 'react';

import { Member } from '@libs/member/types';

import { UserStatus } from '@libs/user/constants';

import MemberListItem from './MemberListItem';

type Props = {
  isOpen: boolean;
  members: Member[];
};

const MembersList: React.FC<Props> = ({ isOpen, members }) => {
  const onlineMembers = useMemo(
    () => members.filter((member) => member.status !== UserStatus.OFFLINE),
    [members],
  );

  const offlineMembers = useMemo(
    () => members.filter((member) => member.status === UserStatus.OFFLINE),
    [members],
  );

  return (
    isOpen && (
      <aside className="bg-caviar w-60 h-full">
        <div className="overflow-y-auto pb-5 pr-2 h-full scrollbar-thin">
          <h3 className="pt-6 pr-2 pl-4 uppercase gg-semibold text-xs text-crestline text-opacity-80">
            online — {onlineMembers.length}
          </h3>
          <ul className="ml-2">
            {onlineMembers.map((member) => (
              <MemberListItem
                key={member.id}
                memberStatus={member.status}
                memberName={member.username}
                avatarThumbnail={member.thumbnail}
              />
            ))}
          </ul>

          <h3 className="pt-6 pr-2 pl-4 uppercase gg-semibold text-xs text-crestline text-opacity-80">
            offline — {offlineMembers.length}
          </h3>
          <ul className="ml-2">
            {offlineMembers.map((member) => (
              <MemberListItem
                key={member.id}
                memberStatus={UserStatus.OFFLINE}
                memberName={member.username}
                avatarThumbnail={member.thumbnail}
              />
            ))}
          </ul>
        </div>
      </aside>
    )
  );
};

export default MembersList;
