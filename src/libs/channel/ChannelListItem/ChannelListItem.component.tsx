import clsx from 'clsx';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import Hashtag from '@components/icons/Hashtag';
import PersonAdd from '@components/icons/PersonAdd';
import Settings from '@components/icons/Settings';
import VolumeFull from '@components/icons/VolumeFull';

import { setSelectedChannel } from '@libs/channel/channelSlice';

import { Channel } from '@libs/channel/types';

import { ChannelType } from '@libs/server/constants';

type Props = {
  /** Channel object within list item */
  channel: Channel;
  /** Whether the channel is selected or not */
  isSelected?: boolean;
};

const ChannelListItem: React.FC<Props> = ({ channel, isSelected }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = useCallback(() => setIsHover(true), []);
  const handleMouseLeave = useCallback(() => setIsHover(false), []);

  const handleChannelClick = useCallback(() => {
    if (channel.type !== ChannelType.AUDIO) {
      dispatch(setSelectedChannel(channel));
    }
  }, [channel, dispatch]);

  const channelIcon = useMemo(() => {
    switch (channel.type) {
      case ChannelType.TEXT:
        return <Hashtag className="w-5 h-5" />;
      case ChannelType.AUDIO:
        return <VolumeFull className="w-5 h-5" />;
    }
  }, [channel.type]);

  const isHoverOrSelected = isHover || isSelected;

  return (
    <li
      className="w-full py-[1px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="ml-2 h-8">
        <button
          type="button"
          className={clsx(
            'flex w-full items-center text-left h-8 px-2 py-1.5 rounded gg-medium leading-5 text-oslo',
            {
              'bg-smoke bg-opacity-10': isSelected,
              'hover:bg-smoke hover:bg-opacity-10': !isSelected,
            },
          )}
          onClick={handleChannelClick}
        >
          <div className="mr-1.5 w-5 h-5">{channelIcon}</div>
          <div
            className={clsx('flex-1', {
              'text-smoke': isHoverOrSelected,
            })}
          >
            {channel.name}
          </div>
          {isHoverOrSelected && (
            <div className="flex text-crestline">
              <PersonAdd className="ml-1 w-4 h-4 hover:text-smoke" />
              <Settings className="ml-1 w-4 h-4 hover:text-smoke" />
            </div>
          )}
        </button>
      </div>
    </li>
  );
};

export default ChannelListItem;
