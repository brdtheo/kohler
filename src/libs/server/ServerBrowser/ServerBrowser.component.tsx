import Add from '@icons/Add';
import Logo from '@icons/Logo';

import { Server } from '@/types/server';

import {
  ServerBrowserDivider,
  ServerBrowserList,
  ServerBrowserListItem,
} from '.';

type Props = {
  serverList: Server[];
};

const ServerBrowser: React.FC<Props> = ({ serverList }) => (
  <div className="bg-shark w-18 h-full flex flex-col gap-3">
    <ServerBrowserList>
      <>
        <ServerBrowserListItem
          title="Direct Messages"
          serverLink="/channels/@me"
        >
          <Logo />
        </ServerBrowserListItem>

        {serverList?.length > 0 && (
          <>
            <ServerBrowserDivider />
            {serverList.map((server) => (
              <ServerBrowserListItem
                key={server.id}
                title={server.name}
                thumbnail={server.thumbnail}
                serverLink={`/channels/${server.id}/1`}
              />
            ))}
          </>
        )}

        <ServerBrowserDivider />

        <ServerBrowserListItem title="Add a server" isExtraAction>
          <Add />
        </ServerBrowserListItem>
      </>
    </ServerBrowserList>
  </div>
);

export default ServerBrowser;
