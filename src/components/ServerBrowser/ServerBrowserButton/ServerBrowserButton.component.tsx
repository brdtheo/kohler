import { ReferenceType } from "@floating-ui/react";

export type Props = {
  /** Background image picture URL, appears as fully scaled to button size. Cannot be used along with an icon */
  thumbnail?: string;
  /** Text to display in the button tooltip. If thumbnail is missing, 2 first letters are taken as icon */
  title?: string;
  /** An element passed within the container and centered. Can be an icon or plain text */
  children?: React.ReactElement;
  /** An additional action all users will have displayed in green */
  isExtraAction?: boolean;
  tooltipReference?: ((node: ReferenceType | null) => void) &
    ((node: ReferenceType | null) => void);
};

const ServerBrowserButton: React.FC<Props> = ({
  thumbnail,
  title,
  children,
  isExtraAction,
  tooltipReference,
}) => {
  return (
    <button
      ref={tooltipReference}
      type="button"
      className={`flex justify-center items-center overflow-hidden transition-colors ease-in-out duration-300 rounded-full hover:rounded-xl w-12 h-12 bg-server-chat ${
        isExtraAction ? "hover:bg-active-extra" : "hover:bg-active"
      }`}
    >
      <>
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full rounded-full hover:rounded-lg"
          />
        )}
      </>
      <>
        {!thumbnail && children && (
          <div
            className={`${
              isExtraAction
                ? "text-active-extra hover:text-server-browser-icon"
                : "text-server-browser-icon"
            } text-server-browser-icon w-12 h-12 flex justify-center items-center`}
          >
            {children}
          </div>
        )}
      </>
    </button>
  );
};

export default ServerBrowserButton;
