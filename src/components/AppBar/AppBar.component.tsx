import Icon from "@components/Icon";
import { AppBarSearch } from ".";

import { IconName } from "@/types/common";

type Props = {
  title: string;
};

const AppBar: React.FC<Props> = ({ title }) => {
  return (
    <div className="bg-server-chat p-2">
      <section className="flex items-center h-8">
        <div className="flex items-center text-icon select-none flex-1">
          <Icon name={IconName.HASHTAG} className="mx-2" />
          <span className="text-smoke font-medium gg-semibold">{title}</span>
        </div>

        <div className="flex items-center text-icon">
          <button
            className="hover:text-smoke transition-colors duration-100 ease-in-out"
            type="button"
          >
            <Icon name={IconName.HASHTAG_CHAT_BUBBLE} className="mx-2" />
          </button>
          <button
            className="hover:text-smoke transition-colors duration-100 ease-in-out"
            type="button"
          >
            <Icon name={IconName.NOTIFICATION} className="mx-2" />
          </button>
          <button
            className="hover:text-smoke transition-colors duration-100 ease-in-out"
            type="button"
          >
            <Icon name={IconName.PIN} className="mx-2" />
          </button>
          <button
            className="hover:text-smoke transition-colors duration-100 ease-in-out"
            type="button"
          >
            <Icon name={IconName.MEMBERS} className="mx-2" />
          </button>

          <AppBarSearch value="" onSearch={() => {}} />

          <button
            className="hover:text-smoke transition-colors duration-100 ease-in-out"
            type="button"
          >
            <Icon name={IconName.INBOX} className="mx-2" />
          </button>
          <button
            className="hover:text-smoke transition-colors duration-100 ease-in-out"
            type="button"
          >
            <Icon name={IconName.HELP} className="mx-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AppBar;
