import Icon from "@components/Icon";
import { AppBarSearch, AppBarButton } from ".";

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
          <AppBarButton
            iconName={IconName.HASHTAG_CHAT_BUBBLE}
            tooltipText="Threads"
          />
          <AppBarButton
            iconName={IconName.NOTIFICATION}
            tooltipText="Notification Settings"
          />
          <AppBarButton iconName={IconName.PIN} tooltipText="Pinned Mesages" />
          <AppBarButton
            iconName={IconName.MEMBERS}
            tooltipText="Members List"
          />

          <AppBarSearch value="" onSearch={() => {}} />

          <AppBarButton iconName={IconName.INBOX} tooltipText="Inbox" />
          <AppBarButton iconName={IconName.HELP} tooltipText="Help" />
        </div>
      </section>
    </div>
  );
};

export default AppBar;
