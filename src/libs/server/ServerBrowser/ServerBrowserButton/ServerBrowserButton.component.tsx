import { ReferenceType } from '@floating-ui/react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export type Props = {
  /** Optional server link: will redirect to route */
  serverLink?: string;
  /** Background image picture URL, appears as fully scaled to button size. Cannot be used along with an icon */
  thumbnail?: string;
  /** Text to display in the button tooltip. If thumbnail is missing, 2 first letters are taken as icon */
  title?: string;
  /** An element passed within the container and centered. Can be an icon or plain text */
  children?: React.ReactElement;
  /** An additional action all users will have displayed in green */
  isExtraAction?: boolean;
  /** Used to set the border radius property dynamically */
  isSelected?: boolean;
  tooltipReference?: ((node: ReferenceType | null) => void) &
    ((node: ReferenceType | null) => void);
  /** Action to perform once server button is clicked */
  onClick?: () => void;
  /** Action to perform once server button is clicked */
  onMouseEnter?: () => void;
  /** Action to perform once server button is clicked */
  onMouseLeave?: () => void;
};

const ServerBrowserButtonContent: React.FC<
  Omit<Props, 'serverLink' | 'onClick'>
> = ({
  thumbnail,
  title,
  children,
  isExtraAction,
  isSelected,
  tooltipReference,
}) => (
  <div
    ref={tooltipReference}
    className={clsx(
      'flex justify-center items-center overflow-hidden transition-colors ease-in-out duration-300 w-12 h-12 bg-ebony',
      isSelected ? 'rounded-xl' : 'rounded-full hover:rounded-xl',
      isExtraAction && 'hover:bg-eucalyptus',
      !isExtraAction && 'hover:bg-cornflower',
    )}
  >
    {thumbnail && (
      <img
        src={thumbnail}
        alt={title}
        className={clsx(
          'w-full h-full',
          isSelected ? 'rounded-xl' : 'rounded-full hover:rounded-xl',
        )}
      />
    )}
    <>
      {!thumbnail && children && (
        <div
          className={clsx(
            'w-12 h-12 flex justify-center items-center',
            isExtraAction ? 'text-eucalyptus hover:text-iron' : 'text-iron',
          )}
        >
          {children}
        </div>
      )}
    </>
  </div>
);

const ServerBrowserButton: React.FC<Props> = ({
  serverLink,
  thumbnail,
  title,
  children,
  isExtraAction,
  isSelected,
  tooltipReference,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (serverLink) {
    return (
      <Link
        to={serverLink}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ServerBrowserButtonContent
          isSelected={isSelected}
          title={title}
          thumbnail={thumbnail}
          isExtraAction={isExtraAction}
          tooltipReference={tooltipReference}
        >
          {children}
        </ServerBrowserButtonContent>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <ServerBrowserButtonContent
        title={title}
        isSelected={isSelected}
        thumbnail={thumbnail}
        isExtraAction={isExtraAction}
        tooltipReference={tooltipReference}
      >
        {children}
      </ServerBrowserButtonContent>
    </button>
  );
};

export default ServerBrowserButton;
