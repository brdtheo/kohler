import useIcon from '@hooks/useIcon';

import type { IconName } from '@/types/common';

type Props = {
  name: IconName;
  className?: string;
};

const Icon: React.FC<Props> = ({ name, className }) => {
  const iconElement = useIcon(name);
  return (
    <>
      {className ? <div className={className}>{iconElement}</div> : iconElement}
    </>
  );
};

export default Icon;
