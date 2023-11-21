import ChevronDown from '@components/icons/ChevronDown';

type Props = {
  /** The name of the server displayed in the sidebar header and RTC state */
  serverName: string;
};

const SidebarHeader: React.FC<Props> = ({ serverName }) => {
  return (
    <header className="w-full border-b border-b-gunmetal shadow">
      <button
        type="button"
        className="w-full flex items-center transition-colors duration-100 hover:bg-crestline hover:bg-opacity-10 py-3 px-4"
        onClick={() => {}}
      >
        <div className="gg-semibold text-smoke flex-1 text-left whitespace-nowrap overflow-hidden text-ellipsis">
          {serverName}
        </div>
        <div className="opacity-80 text-smoke stroke-2">
          <ChevronDown />
        </div>
      </button>
    </header>
  );
};

export default SidebarHeader;
