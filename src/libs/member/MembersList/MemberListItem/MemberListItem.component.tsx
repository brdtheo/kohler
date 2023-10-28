import Avatar from '@components/Avatar';

import { UserStatus } from '@/types/user';

type Props = {
  memberStatus: UserStatus;
  memberName: string;
  memberBio?: string;
  avatarThumbnail?: string;
};

const MemberListItem: React.FC<Props> = ({
  memberStatus,
  memberName,
  memberBio,
  avatarThumbnail,
}) => (
  <li
    className={`text-crestline flex h-11${
      memberStatus === UserStatus.OFFLINE ? ' opacity-30' : ''
    }`}
  >
    <button
      type="button"
      className="w-full flex items-center pl-2 mr-2 rounded hover:bg-metalise"
    >
      <Avatar
        thumbnail={avatarThumbnail}
        status={memberStatus}
        classes={{ container: 'mr-3' }}
      />

      <div className="overflow-hidden flex flex-col">
        <span className="leading-5 text-base gg-medium text-crestline flex-1 text-left whitespace-nowrap overflow-hidden text-ellipsis">
          {memberName}
        </span>
        {memberBio && (
          <span className="leading-4 gg-regular text-xs text-left whitespace-nowrap overflow-hidden text-ellipsis">
            {memberBio}
          </span>
        )}
      </div>
    </button>
  </li>
);

export default MemberListItem;
