import { useState } from 'react';

import { useTooltip } from '@hooks/useTooltip';

type Props = {
  /** Required icon component to display within the button */
  icon: React.ReactNode;
  /** Content to display inside an optional tooltip element */
  tooltipText?: string;
  onClick: () => void;
};

const MessageInputButton: React.FC<Props> = ({
  icon,
  tooltipText,
  onClick,
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const { refs, tooltipNode, getReferenceProps } = useTooltip({
    placement: 'top',
    open: true,
    content: tooltipText ?? '',
    mainAxisOffset: 10,
    maxWidth: 190,
    classNames: 'leading-4',
    onOpenChange: setIsTooltipOpen,
  });

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="mx-1 flex justify-center items-center w-8 h-11 hover:text-smoke transition-colors duration-100 ease-in-out"
        type="button"
        onClick={onClick}
      >
        {icon}
      </button>

      {tooltipText && isTooltipOpen && tooltipNode}
    </>
  );
};

export default MessageInputButton;
