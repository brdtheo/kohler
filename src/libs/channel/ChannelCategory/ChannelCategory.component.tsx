import { useState } from 'react';

import { useTooltip } from '@hooks/useTooltip';

import Add from '@components/icons/Add';
import ChevronDown from '@components/icons/ChevronDown';
import ChevronRight from '@components/icons/ChevronRight';

import ChannelListItem from '@libs/channel/ChannelListItem';

import { ServerChannel } from '@/types/server';

type Props = {
  categoryName: string;
  categoryChannels: ServerChannel[];
  serverId: number;
  selectedChannel: number;
};

const ChannelCategory: React.FC<Props> = ({
  categoryName,
  categoryChannels,
  serverId,
  selectedChannel,
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { refs, tooltipNode, getReferenceProps } = useTooltip({
    placement: 'top',
    open: isTooltipOpen,
    content: 'add channel',
    classNames: 'capitalize',
    mainAxisOffset: 5,
    onOpenChange: setIsTooltipOpen,
  });

  const chevronClassNames = 'absolute top-[6px] left-[2px] w-3 h-3';

  return (
    <>
      <li className="pt-4">
        <button
          type="button"
          className="flex w-full text-left items-center pl-4 pr-2 h-6 relative text-oslo hover:text-smoke"
          onClick={() => setIsCollapsed((state) => !state)}
        >
          {isCollapsed ? (
            <ChevronRight className={chevronClassNames} />
          ) : (
            <ChevronDown className={chevronClassNames} />
          )}
          <div className="gg-semibold text-xs uppercase flex-1 leading-4 h-fit select-none">
            {categoryName}
          </div>
          <button
            ref={refs.setReference}
            {...getReferenceProps()}
            className="w-fit h-fit"
            type="button"
          >
            <Add className="w-4 h-4 hover:text-smoke" />
          </button>

          {isTooltipOpen && tooltipNode}
        </button>
      </li>

      {categoryChannels
        .filter((channel) =>
          isCollapsed ? channel.id === selectedChannel : channel,
        )
        .map((channel: ServerChannel) => (
          <ChannelListItem
            key={channel.id}
            channelId={channel.id}
            serverId={serverId}
            channelName={channel.name}
            channelType={channel.type}
            isSelected={selectedChannel === channel.id}
          />
        ))}
    </>
  );
};

export default ChannelCategory;
