import ServerBrowser from "@components/ServerBrowser";
import AppBar from "@components/AppBar";

import { Server, ServerChannel, ChannelType } from "@/types/server";

const _TEMP_SERVER_LIST: Server[] = [
  {
    id: 1,
    name: "TailwindCSS",
    thumbnail:
      "https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj",
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
  return (
    <div className="flex w-full h-screen">
      <ServerBrowser serverList={_TEMP_SERVER_LIST} />
      <div className="flex-1 bg-gray-700">
        <AppBar title={_TEMP_SERVER_CHANNEL.name} />
      </div>
    </div>
  );
}
