import { useState } from "react";

import { ServerBrowserButton, type ServerBrowserButtonProps } from "..";
import { useTooltip } from "@hooks/useTooltip";

type Props = Omit<ServerBrowserButtonProps, "tooltipReference">;

const ServerBrowserListItem: React.FC<Props> = ({
  thumbnail,
  title,
  children,
  isExtraAction,
}) => {
  const [showActiveElements, setShowActiveElements] = useState(false);

  const { refs, tooltipNode, getReferenceProps } = useTooltip({
    placement: "right",
    open: showActiveElements,
    content: title ?? "",
    mainAxisOffset: 20,
    onOpenChange: setShowActiveElements,
  });

  return (
    <li className="flex justify-center w-full h-12 relative">
      {showActiveElements && (
        <div className="absolute top-1/2 translate-y-[-50%] left-0 w-1 rounded-r-lg h-2/5 bg-smoke" />
      )}

      <ServerBrowserButton
        tooltipReference={refs.setReference}
        {...getReferenceProps()}
        title={title}
        thumbnail={thumbnail}
        isExtraAction={isExtraAction}
      >
        {children}
      </ServerBrowserButton>

      {showActiveElements && tooltipNode}
    </li>
  );
};

export default ServerBrowserListItem;
