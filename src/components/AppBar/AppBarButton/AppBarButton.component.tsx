import { useState } from 'react';

import Icon from '@components/Icon';
import { useTooltip } from '@hooks/useTooltip';

import { IconName } from '@/types/common';

type Props = {
  /** Name of the icon within the button */
  iconName: IconName;
  /** Content to display inside an optional tooltip element */
  tooltipText?: string;
  onClick?: () => void;
};

const AppBarButton: React.FC<Props> = ({ iconName, tooltipText, onClick }) => {
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
        className="hover:text-smoke transition-colors duration-100 ease-in-out"
        type="button"
        onClick={onClick}
      >
        <Icon name={iconName} className="mx-2" />
      </button>

      {tooltipText && isTooltipOpen && tooltipNode}
    </>
  );
};

export default AppBarButton;
