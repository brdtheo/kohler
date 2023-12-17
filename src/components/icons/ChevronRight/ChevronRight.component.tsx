import clsx from 'clsx';

import { SVGComponentProps } from '@icons/types';

const ChevronRight: React.FC<SVGComponentProps> = ({ className }) => (
  <svg
    className={clsx('-rotate-90', className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z"
    />
  </svg>
);

export default ChevronRight;
