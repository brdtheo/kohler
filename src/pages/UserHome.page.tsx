import ServerBrowser from '@libs/server/ServerBrowser';

const UserHomePage: React.FC = () => {
  return (
    <div className="flex w-full h-screen bg-ebony">
      <ServerBrowser />
    </div>
  );
};

export default UserHomePage;
