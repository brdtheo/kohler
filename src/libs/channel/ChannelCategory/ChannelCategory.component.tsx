import { useCallback, useState } from 'react';

import { useTooltip } from '@hooks/useTooltip';

import Add from '@components/icons/Add';
import ChevronDown from '@components/icons/ChevronDown';
import ChevronRight from '@components/icons/ChevronRight';

import ChannelListItem from '@libs/channel/ChannelListItem';

import { Channel } from '@libs/channel/types';

type Props = {
  /** Name of the category */
  categoryName: string;
  /** Category channels (all types) */
  categoryChannels: Channel[];
  /** ID of the current selected channel */
  selectedChannel: string;
};

const ChannelCategory: React.FC<Props> = ({
  categoryName,
  categoryChannels,
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

  const handleCollapseCategory = useCallback(
    () => setIsCollapsed((state) => !state),
    [],
  );

  return (
    <>
      <li className="pt-4">
        <div
          className="cursor-pointer flex w-full text-left items-center pl-4 pr-2 h-6 relative text-oslo hover:text-smoke"
          onClick={handleCollapseCategory}
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
        </div>
      </li>

      {categoryChannels
        .filter((channel) =>
          isCollapsed ? channel.id === selectedChannel : channel,
        )
        .map((channel: Channel) => (
          <ChannelListItem
            key={channel.id}
            channel={channel}
            isSelected={selectedChannel === channel.id}
          />
        ))}
    </>
  );
};

export default ChannelCategory;
