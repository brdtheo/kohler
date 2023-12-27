import clsx from 'clsx';
import { useState } from 'react';

import getMemberStatusColor from '@utils/getMemberStatusColor';
import getMemberStatusText from '@utils/getMemberStatusText';

import { useTooltip } from '@hooks/useTooltip';

import Logo from '@icons/Logo';

import { UserStatus } from '@/types/user';

import { AvatarSize } from './constants';

type Props = {
  /** Default size is 32x32. Can be small (24x24) or large (40x40) */
  size?: `${AvatarSize}`;
  /** Picture used within the avatar container. Fallback to the logo icon if not provided */
  thumbnail?: string;
  /** Status used to set the avatar indicator color. Optional as not required for messages */
  status?: UserStatus;
  /** Optional boolean to prevent the tooltip to appear on status hover */
  isPreventTooltip?: boolean;
  /** Optional classNames for children */
  classes?: {
    container?: string;
  };
};

const avatarSizeClassNameMap = {
  [AvatarSize.SMALL]: 'w-6 h-6',
  [AvatarSize.LARGE]: 'w-10 h-10',
};

const Avatar: React.FC<Props> = ({
  size,
  thumbnail,
  status,
  isPreventTooltip,
  classes,
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const { refs, tooltipNode, getReferenceProps } = useTooltip({
    placement: 'top',
    open: isTooltipOpen,
    content: getMemberStatusText(status) ?? '',
    mainAxisOffset: 5,
    onOpenChange: setIsTooltipOpen,
  });

  const avatarSizeClassName =
    (size && avatarSizeClassNameMap[size]) ?? 'w-8 h-8';

  return (
    <div
      className={clsx(
        'rounded-full relative',
        avatarSizeClassName,
        classes?.container,
      )}
    >
      {thumbnail && (
        <div
          className={clsx(
            'rounded-full',
            avatarSizeClassName,
            thumbnail && `bg-[url('${thumbnail}')]`,
          )}
          style={{
            ...(thumbnail && {
              backgroundImage: `url(${thumbnail})`,
              backgroundSize: 'cover',
            }),
          }}
        />
      )}
      {!thumbnail && (
        <div
          className={clsx(
            'p-1.5 bg-cornflower rounded-full text-iron flex justify-center items-center',
            avatarSizeClassName,
          )}
        >
          <Logo />
        </div>
      )}

      {status != (UserStatus.OFFLINE || undefined) && (
        <>
          <div
            className={clsx(
              'box-content border-solid border-[3px] border-caviar w-2.5 h-2.5 absolute bottom-[-3px] right-[-3px] rounded-full',
              getMemberStatusColor(status),
            )}
            ref={refs.setReference}
            {...getReferenceProps()}
          />
          {!isPreventTooltip && isTooltipOpen && tooltipNode}
        </>
      )}
    </div>
  );
};

export default Avatar;
