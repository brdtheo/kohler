type Props = {
  /** Required icon component to display within the button */
  icon: React.ReactNode;
};

const MessageInputButton: React.FC<Props> = ({ icon }) => (
  <button className="mx-1 flex justify-center items-center w-8 h-11 hover:text-smoke transition-colors duration-100 ease-in-out">
    {icon}
  </button>
);

export default MessageInputButton;
