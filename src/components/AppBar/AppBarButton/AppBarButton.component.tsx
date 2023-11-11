import { useState } from 'react';

import { useTooltip } from '@hooks/useTooltip';

type Props = {
  /** Icon element within the button */
  icon: React.ReactNode;
  /** Content to display inside an optional tooltip element */
  tooltipText?: string;
  onClick?: () => void;
};

const AppBarButton: React.FC<Props> = ({ icon, tooltipText, onClick }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const { refs, tooltipNode, getReferenceProps } = useTooltip({
    placement: 'bottom',
    open: isTooltipOpen,
    content: tooltipText ?? '',
    mainAxisOffset: 10,
    onOpenChange: setIsTooltipOpen,
  });

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        className="hover:text-smoke transition-colors duration-100 ease-in-out mx-2"
        type="button"
        onClick={onClick}
      >
        {icon}
      </button>

      {tooltipText && isTooltipOpen && tooltipNode}
    </>
  );
};

export default AppBarButton;
