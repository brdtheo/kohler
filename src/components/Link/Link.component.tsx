import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import { LinkSize } from './types';

type Props = {
  children: React.ReactNode;
  className?: string;
  to?: string;
  size?: `${LinkSize}`;
  onClick?: () => void;
};

const linkSizeClassNameMap = {
  [LinkSize.SM]: 'text-xs gg-regular',
  [LinkSize.MD]: 'text-sm gg-regular',
  [LinkSize.LG]: 'text-base gg-regular',
};

const Link: React.FC<Props> = ({
  children,
  className,
  to,
  size = LinkSize.MD,
  onClick,
}) => {
  const linkSizeClassName = linkSizeClassNameMap[size];

  if (to) {
    return (
      <RouterLink
        to={to}
        className={clsx(
          'w-fit h-fit leading-none text-link hover:underline outline-none outline-transparent outline-offset-0 outline-4 focus-visible:outline-link rounded-sm',
          linkSizeClassName,
          className,
        )}
      >
        {children}
      </RouterLink>
    );
  }
  return (
    <button
      className={clsx(
        'w-fit h-fit leading-none text-link hover:underline outline-none outline-transparent outline-offset-0 outline-4 focus-visible:outline-link rounded-sm',
        linkSizeClassName,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Link;
