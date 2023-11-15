import {
  FloatingArrow,
  Placement,
  arrow,
  autoUpdate,
  offset,
  size,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react';
import clsx from 'clsx';
import { useRef } from 'react';

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
  maxWidth,
  classNames,
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
  /** The tooltip max width in pixels. If set, multiple lines will be set on text overlap */
  maxWidth?: number;
  /** Optional CSS class names */
  classNames?: string;
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

      size({
        apply({ elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: maxWidth && `${maxWidth}px`,
          });
        },
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  const tooltipNode = (
    <div
      className={clsx(
        'w-max h-fit flex items-center px-3 py-2 rounded bg-woodsmoke text-sm font-medium text-smoke relative gg-regular z-50',
        classNames,
      )}
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
