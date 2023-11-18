import { useState } from 'react';

import { useTooltip } from '@hooks/useTooltip';

import { ServerBrowserButton, type ServerBrowserButtonProps } from '..';

type Props = Omit<ServerBrowserButtonProps, 'tooltipReference'>;

const ServerBrowserListItem: React.FC<Props> = ({
  serverLink,
  thumbnail,
  title,
  children,
  isExtraAction,
  onClick,
}) => {
  const [showActiveElements, setShowActiveElements] = useState(false);

  const { refs, tooltipNode, getReferenceProps } = useTooltip({
    placement: 'right',
    open: showActiveElements,
    content: title ?? '',
    mainAxisOffset: 20,
    maxWidth: 196,
    classNames: 'gg-semibold',
    onOpenChange: setShowActiveElements,
  });

  return (
    <li className="flex justify-center w-full h-12 relative">
      {showActiveElements && (
        <div className="absolute top-1/2 translate-y-[-50%] left-0 w-1 rounded-r-lg h-2/5 bg-smoke" />
      )}

      <ServerBrowserButton
        serverLink={serverLink}
        title={title}
        thumbnail={thumbnail}
        isExtraAction={isExtraAction}
        onClick={onClick}
        tooltipReference={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </ServerBrowserButton>

      {showActiveElements && tooltipNode}
    </li>
  );
};

export default ServerBrowserListItem;
