import Icon from "@components/Icon";
import {
  ServerBrowserDivider,
  ServerBrowserList,
  ServerBrowserListItem,
} from "./";

import { type Server } from "@/types/server";
import { IconName } from "@/types/common";

type Props = {
  serverList: Server[];
};

const ServerBrowser: React.FC<Props> = ({ serverList }) => (
  <div className="bg-server-browser w-[72px] h-full flex flex-col gap-3">
    <ServerBrowserList>
      <>
        <ServerBrowserListItem title="Direct Messages">
          <Icon name={IconName.LOGO} />
        </ServerBrowserListItem>

        {serverList && (
          <>
            <ServerBrowserDivider />
            {serverList.map((server) => (
              <ServerBrowserListItem
                key={server.id}
                title={server.name}
                thumbnail={server.thumbnail}
              />
            ))}
          </>
        )}

        <ServerBrowserDivider />

        <ServerBrowserListItem title="Add a server" isExtraAction>
          <Icon name={IconName.ADD} />
        </ServerBrowserListItem>
      </>
    </ServerBrowserList>
  </div>
);

export default ServerBrowser;
