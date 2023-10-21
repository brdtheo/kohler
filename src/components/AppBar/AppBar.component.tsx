import Icon from "@components/Icon";
import { AppBarSearch, AppBarButton } from ".";

import { IconName } from "@/types/common";

type Props = {
  title: string;
  onShowMembersList: () => void;
};

const AppBar: React.FC<Props> = ({ title, onShowMembersList }) => {
  return (
    <div className="bg-ebony p-2 shadow-sm relative shadow-shark">
      <section className="flex items-center h-8">
        <div className="flex items-center text-crestline select-none flex-1">
          <Icon name={IconName.HASHTAG} className="mx-2" />
          <h1 className="text-smoke font-medium gg-semibold">{title}</h1>
        </div>

        <div className="flex items-center text-crestline">
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
            onClick={onShowMembersList}
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
