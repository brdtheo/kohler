import { useCallback, useState } from "react";

import { ServerBrowserButton, type ServerBrowserButtonProps } from "..";

type Props = Omit<ServerBrowserButtonProps, "onMouseEnter" | "onMouseLeave">;

const ServerBrowserListItem: React.FC<Props> = ({
  thumbnail,
  title,
  children,
  isExtraAction,
}) => {
  const [showActiveElements, setShowActiveElements] = useState(false);

  const handleOnButtonMouseEnter = useCallback(() => {
    setShowActiveElements(true);
  }, []);

  const handleOnButtonMouseLeave = useCallback(() => {
    setShowActiveElements(false);
  }, []);

  return (
    <li className="flex justify-center w-full h-12 relative">
      {showActiveElements && (
        <div className="absolute top-1/2 translate-y-[-50%] left-0 w-1 rounded-r-lg h-2/5 bg-smoke" />
      )}
      {showActiveElements && (
        <div className="absolute w-max flex items-center px-2 rounded-sm h-10 left-full bg-gray-900 text-sm font-medium text-white top-1/2 translate-y-[-50%] ml-2 opacity-90">
          {title}
        </div>
      )}
      <ServerBrowserButton
        title={title}
        thumbnail={thumbnail}
        isExtraAction={isExtraAction}
        onMouseEnter={handleOnButtonMouseEnter}
        onMouseLeave={handleOnButtonMouseLeave}
      >
        {children}
      </ServerBrowserButton>
    </li>
  );
};

export default ServerBrowserListItem;
