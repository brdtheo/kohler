import { useState } from 'react';

import Icon from '@components/Icon';
import { useTooltip } from '@hooks/useTooltip';

import { IconName } from '@/types/common';

type Props = {
  /** The name of the icon element displayed in the button */
  iconName: IconName;
  /** The text displayed in the tooltip on button hover */
  tooltipText: string;
  /** The button click handler */
  onClick: () => void;
};

const UserActionsManagerButton: React.FC<Props> = ({
  iconName,
  tooltipText,
  onClick,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const { refs, tooltipNode, getReferenceProps } = useTooltip({
    placement: 'top',
    open: showTooltip,
    content: tooltipText,
    mainAxisOffset: 8,
    maxWidth: 160,
    onOpenChange: setShowTooltip,
  });

  return (
    <>
      <button
        className="text-crestline w-8 h-8 flex justify-center items-center hover:bg-smoke hover:text-smoke hover:text-opacity-90 hover:bg-opacity-10 rounded"
        type="button"
        onClick={onClick}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <Icon name={iconName} />
      </button>

      {showTooltip && <span className="text-center">{tooltipNode}</span>}
    </>
  );
};

export default UserActionsManagerButton;
