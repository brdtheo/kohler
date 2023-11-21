import clsx from 'clsx';
import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import Hashtag from '@components/icons/Hashtag';
import PersonAdd from '@components/icons/PersonAdd';
import Settings from '@components/icons/Settings';
import VolumeFull from '@components/icons/VolumeFull';

import { ChannelType } from '@/types/server';

type Props = {
  channelId: number;
  serverId: number;
  channelName: string;
  channelType: `${ChannelType}`;
  isSelected?: boolean;
};

const ChannelListItem: React.FC<Props> = ({
  channelId,
  serverId,
  channelName,
  channelType,
  isSelected,
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHover(true), []);
  const handleMouseLeave = useCallback(() => setIsHover(false), []);

  const channelIcon = useMemo(() => {
    switch (channelType) {
      case ChannelType.TEXT:
        return <Hashtag className="w-5 h-5" />;
      case ChannelType.AUDIO:
        return <VolumeFull className="w-5 h-5" />;
    }
  }, [channelType]);

  const isHoverOrSelected = isHover || isSelected;

  return (
    <li
      className="w-full py-[1px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ml-2 h-8">
        <Link
          className={clsx(
            'flex items-center h-8 px-2 py-1.5 rounded gg-medium leading-5 text-oslo',
            {
              'bg-smoke bg-opacity-10': isSelected,
              'hover:bg-smoke hover:bg-opacity-10': !isSelected,
            },
          )}
          to={`/channels/${serverId}/${channelId}`}
        >
          <div className="mr-1.5 w-5 h-5">{channelIcon}</div>
          <div
            className={clsx('flex-1', {
              'text-smoke': isHoverOrSelected,
            })}
          >
            {channelName}
          </div>
          {isHoverOrSelected && (
            <div className="flex text-crestline">
              <PersonAdd className="ml-1 w-4 h-4 hover:text-smoke" />
              <Settings className="ml-1 w-4 h-4 hover:text-smoke" />
            </div>
          )}
        </Link>
      </div>
    </li>
  );
};

export default ChannelListItem;
