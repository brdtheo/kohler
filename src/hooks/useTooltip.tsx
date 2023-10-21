import { useRef } from "react";

import {
  FloatingArrow,
  Placement,
  arrow,
  autoUpdate,
  offset,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";

/**
 * Returns all of the required props for tooltip used in server browser button
 *
 * More infos in the docs: https://floating-ui.com/docs/tooltip#usefloating-hook
 *
 * @example
 * const { refs, tooltipNode, getReferenceProps } = useTooltip({
 *  placement: "right",
 *  open: showTooltip,
 *  content: server.title,
 *  onOpenChange: setShowTooltip,
 * });
 */
export const useTooltip = ({
  placement,
  content,
  open,
  mainAxisOffset,
  onOpenChange,
}: {
  /** Where the child element should be positioned */
  placement: Placement;
  /** Text to be displayed within the tooltip */
  content: string;
  /** Boolean that controls the display of the tooltip */
  open: boolean;
  /** Main axis offset in px */
  mainAxisOffset?: number;
  /** Set state action to change the boolean */
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open,
    placement,
    onOpenChange,
    middleware: [
      offset({
        mainAxis: mainAxisOffset,
      }),
      arrow({
        element: arrowRef,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  const tooltipNode = (
    <div
      className="w-max flex items-center px-3 rounded h-10 bg-woodsmoke text-sm font-medium text-smoke relative gg-semibold z-50"
      ref={refs.setFloating}
      style={floatingStyles}
      {...getFloatingProps()}
    >
      <FloatingArrow
        ref={arrowRef}
        context={context}
        className="fill-woodsmoke"
        width={10}
        height={4}
      />
      {content}
    </div>
  );

  return {
    arrowRef,
    refs,
    floatingStyles,
    context,
    tooltipNode,
    getReferenceProps,
    getFloatingProps,
  };
};
