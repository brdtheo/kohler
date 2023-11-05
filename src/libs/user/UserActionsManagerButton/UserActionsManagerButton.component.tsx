import Icon from '@components/Icon';

import { IconName } from '@/types/common';

type Props = {
  /** The name of the icon element displayed in the button */
  iconName: IconName;
  /** The button click handler */
  onClick: () => void;
};

const UserActionsManagerButton: React.FC<Props> = ({ iconName, onClick }) => {
  return (
    <button
      className="text-crestline w-8 h-8 flex justify-center items-center hover:bg-smoke hover:text-smoke hover:text-opacity-90 hover:bg-opacity-10 rounded"
      type="button"
      onClick={onClick}
    >
      <Icon name={iconName} />
    </button>
  );
};

export default UserActionsManagerButton;
