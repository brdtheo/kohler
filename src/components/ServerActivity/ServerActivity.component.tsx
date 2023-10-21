import ServerActivityMessageInput from "./ServerActivityMessageInput";

type Props = {
  /** The name of the channel. Used for message input placeholder */
  channelName: string;
};

const ServerActivity: React.FC<Props> = ({ channelName }) => (
  <div className="flex flex-1 bg-ebony flex-col">
    <div className="flex-1" />

    <ServerActivityMessageInput channelName={channelName} />
  </div>
);

export default ServerActivity;
