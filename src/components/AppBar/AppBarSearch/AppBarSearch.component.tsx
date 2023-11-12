import clsx from 'clsx';
import { useCallback, useState } from 'react';

import Search from '@icons/Search';

type Props = {
  value: string;
  onSearch: () => void;
};

const AppBarSearch: React.FC<Props> = ({ value }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleOnFocus = useCallback(() => setIsInputFocused(true), []);
  const handleOnBlur = useCallback(() => setIsInputFocused(false), []);

  return (
    <div
      className={clsx(
        'transition-all ease-in duration-200 rounded bg-shark overflow-hidden mx-2 h-6',
        isInputFocused && 'w-60',
        !isInputFocused && 'w-36',
      )}
    >
      <div className="relative">
        <input
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          className="bg-inherit outline-none h-6 text-sm gg-medium text-smoke pl-2 w-full pr-6"
          placeholder="Search"
        />
        <div
          className={clsx(
            'w-6 h-6 p-1 box-border absolute right-0 top-0',
            value && 'text-crestline',
            !value && 'text-iron',
          )}
        >
          <Search />
        </div>
      </div>
    </div>
  );
};

export default AppBarSearch;
