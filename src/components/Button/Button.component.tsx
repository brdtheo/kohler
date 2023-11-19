import clsx from 'clsx';

import TypingDots from '@components/icons/TypingDots';

import { ButtonType } from './types';

type Props = {
  children: React.ReactNode;
  isLoading?: boolean;
  type?: `${ButtonType}`;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  children,
  isLoading,
  type = 'button',
  onClick,
}) => (
  <button
    disabled={isLoading}
    type={type}
    className={clsx(
      'flex justify-center items-center px-4 py-1 bg-cornflower text-smoke rounded h-11 gg-medium mb-2 transition-colors duration-200 hover:bg-opacity-70\
        outline-none outline-transparent outline-offset-0 outline-4 focus-visible:outline-link',
      { 'bg-opacity-70': isLoading },
    )}
    onClick={onClick}
  >
    {isLoading ? <TypingDots /> : children}
  </button>
);

export default Button;
