import Hashtag from '@icons/Hashtag';
import HashtagChatBubble from '@icons/HashtagChatBubble';
import Help from '@icons/Help';
import Inbox from '@icons/Inbox';
import Members from '@icons/Members';
import Notification from '@icons/Notification';
import Pin from '@icons/Pin';

import { AppBarButton, AppBarSearch } from '.';

type Props = {
  title: string;
  onShowMembersList: () => void;
};

const AppBar: React.FC<Props> = ({ title, onShowMembersList }) => {
  return (
    <div className="bg-ebony p-2 border-b border-b-gunmetal shadow relative">
      <section className="flex items-center h-8">
        <div className="flex items-center text-crestline select-none flex-1">
          <div className="mx-2">
            <Hashtag />
          </div>
          <h1 className="text-smoke font-medium gg-semibold">{title}</h1>
        </div>

        <div className="flex items-center text-crestline">
          <AppBarButton icon={<HashtagChatBubble />} tooltipText="Threads" />
          <AppBarButton
            icon={<Notification />}
            tooltipText="Notification Settings"
          />
          <AppBarButton icon={<Pin />} tooltipText="Pinned Mesages" />
          <AppBarButton
            icon={<Members />}
            tooltipText="Members List"
            onClick={onShowMembersList}
          />

          <AppBarSearch value="" onSearch={() => {}} />

          <AppBarButton icon={<Inbox />} tooltipText="Inbox" />
          <AppBarButton icon={<Help />} tooltipText="Help" />
        </div>
      </section>
    </div>
  );
};

export default AppBar;
