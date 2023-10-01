import ServerBrowser from "@components/ServerBrowser";

import { UserRegisteredServer } from "@/types/common";

const _TEMP_SERVER_LIST: UserRegisteredServer[] = [
  {
    id: 1,
    name: "TailwindCSS",
    thumbnail:
      "https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj",
  },
];

export default function App() {
  return (
    <div className="grid grid-cols-auto w-full h-screen bg-server-chat">
      <ServerBrowser serverList={_TEMP_SERVER_LIST} />
    </div>
  );
}
