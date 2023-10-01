import useIcon from "@hooks/useIcon";

import type { IconName } from "@/types/common";

type Props = {
  name: IconName;
};

const Icon: React.FC<Props> = ({ name }) => {
  const iconElement = useIcon(name);
  return iconElement;
};

export default Icon;
