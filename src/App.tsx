import { useCallback, useState } from "react";

import ServerBrowser from "@components/ServerBrowser";
import AppBar from "@components/AppBar";
import ServerMembersList from "@components/ServerMembersList";
import ServerActivity from "@components/ServerActivity";

import { Server, ServerChannel, ChannelType } from "@/types/server";

const _TEMP_SERVER_LIST: Server[] = [
  {
    id: 1,
    name: "CS2",
    thumbnail: "https://i.redd.it/jfr58wvzl5db1.jpg",
    created_at: "",
    invite_code: "",
  },
];

const _TEMP_SERVER_CHANNEL: ServerChannel = {
  id: 1,
  name: "general",
  type: ChannelType.TEXT,
};

export default function App() {
  const [isMembersListOpen, setIsMembersListOpen] = useState(true);

  const toggleMemberList = useCallback(
    () => setIsMembersListOpen((state) => !state),
    []
  );

  return (
    <div className="flex w-full h-screen">
      <ServerBrowser serverList={_TEMP_SERVER_LIST} />
      <div className="flex-1 bg-gray-700 overflow-hidden">
        <AppBar
          title={_TEMP_SERVER_CHANNEL.name}
          onShowMembersList={toggleMemberList}
        />
        <div className="flex flex-1 h-full-app-bar">
          <ServerActivity channelName={_TEMP_SERVER_CHANNEL.name} />
          <ServerMembersList isOpen={isMembersListOpen} members={[]} />
        </div>
      </div>
    </div>
  );
}
