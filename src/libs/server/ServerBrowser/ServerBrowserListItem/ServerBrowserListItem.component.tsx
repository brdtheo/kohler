import clsx from 'clsx';
import { useCallback, useState } from 'react';

import { useTooltip } from '@hooks/useTooltip';

import { ServerBrowserButton, ServerBrowserButtonProps } from '..';

type Props = Omit<ServerBrowserButtonProps, 'tooltipReference'> & {
  isButtonFocused?: boolean;
};

const ServerBrowserListItem: React.FC<Props> = ({
  serverLink,
  thumbnail,
  title,
  children,
  isExtraAction,
  isButtonFocused,
  onClick,
}) => {
  const [showSideIndicator, setShowSideIndicator] = useState(false);
  const [showButtonTooltip, setShowButtonTooltip] = useState(false);

  const { refs, tooltipNode, getReferenceProps } = useTooltip({
    placement: 'right',
    open: showButtonTooltip,
    content: title ?? '',
    mainAxisOffset: 20,
    maxWidth: 196,
    classNames: 'gg-semibold',
    onOpenChange: setShowButtonTooltip,
  });

  const handleButtonMouseEnter = useCallback(
    () => setShowSideIndicator(true),
    [],
  );

  const handleButtonMouseLeave = useCallback(
    () => setShowSideIndicator(false),
    [],
  );

  return (
    <li className="flex justify-center w-full h-12 relative">
      {(showSideIndicator || isButtonFocused) && (
        <div
          className={clsx(
            'absolute top-1/2 translate-y-[-50%] left-0 w-1 rounded-r-lg bg-smoke',
            isButtonFocused ? 'h-3/4' : 'h-2/5',
          )}
        />
      )}

      <ServerBrowserButton
        serverLink={serverLink}
        isSelected={isButtonFocused}
        title={title}
        thumbnail={thumbnail}
        isExtraAction={isExtraAction}
        onClick={onClick}
        tooltipReference={refs.setReference}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
        {...getReferenceProps()}
      >
        {children}
      </ServerBrowserButton>

      {showButtonTooltip && tooltipNode}
    </li>
  );
};

export default ServerBrowserListItem;
