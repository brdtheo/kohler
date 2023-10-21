import { useCallback, useState } from 'react';

import Icon from '@components/Icon';
import getMemberStatusColor from '@utils/getMemberStatusColor';
import getMemberStatusText from '@utils/getMemberStatusText';
import { useTooltip } from '@hooks/useTooltip';

import { AvatarSize, IconName } from '@/types/common';
import { UserStatus } from '@/types/user';

type Props = {
  /** Default size is 32x32. Can be small (24x24) or large (40x40) */
  size?: AvatarSize;
  /** Picture used within the avatar container. Fallback to the logo icon if not provided */
  thumbnail?: string;
  /** Status used to set the avatar indicator color */
  status: UserStatus;
};

const Avatar: React.FC<Props> = ({ size, thumbnail, status }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const { refs, tooltipNode, getReferenceProps } = useTooltip({
    placement: 'top',
    open: isTooltipOpen,
    content: getMemberStatusText(status) ?? '',
    mainAxisOffset: 5,
    onOpenChange: setIsTooltipOpen,
  });

  const getWidthHeight = useCallback(() => {
    switch (size) {
      case AvatarSize.SMALL:
        return 'w-6 h-6';
      case AvatarSize.LARGE:
        return 'w-10 h-10';
      default:
        return 'w-8 h-8';
    }
  }, [size]);

  const avatarThumbnailClass = thumbnail ? ` bg-[url('${thumbnail}')]` : '';

  return (
    <div className={`${getWidthHeight()} rounded-full mr-3 relative`}>
      {thumbnail && (
        <div
          className={`w-8 h-8 rounded-full${avatarThumbnailClass}`}
          style={{ ...(thumbnail && { backgroundImage: `url(${thumbnail})` }) }}
        />
      )}
      {!thumbnail && (
        <div
          className={`w-8 h-8 p-1.5 bg-cornflower rounded-full text-iron flex justify-center items-center`}
        >
          <Icon name={IconName.LOGO} />
        </div>
      )}

      {status !== UserStatus.OFFLINE && (
        <>
          <div
            ref={refs.setReference}
            {...getReferenceProps()}
            className={`box-content border-solid border-[3px] border-caviar w-2.5 h-2.5 absolute bottom-[-3px] right-[-3px] ${getMemberStatusColor(
              status,
            )} rounded-full`}
          />
          {isTooltipOpen && tooltipNode}
        </>
      )}
    </div>
  );
};

export default Avatar;
