type Props = {
  /** Expect a children than can be one or more list items
   * @example
   * <ServerBrowserList>
   *   <>
   *     <li>...</li>
   *     <li>...</li>
   *     <li>...</li>
   *   <>
   * </ServerBrowserList>
   */
  children: React.ReactElement;
};

const ServerBrowserList: React.FC<Props> = ({ children }) => (
  <ul className="flex-1 flex flex-col gap-3 py-3">{children}</ul>
);

export default ServerBrowserList;
