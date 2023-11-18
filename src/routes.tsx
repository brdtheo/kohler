import { createBrowserRouter } from 'react-router-dom';

import DirectMessagePage from '@pages/DirectMessage.page';
import LoginPage from '@pages/Login.page';
import ServerPage from '@pages/Server.page';
import ShopPage from '@pages/Shop.page';
import StorePage from '@pages/Store.page';
import UserHomePage from '@pages/UserHome.page';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/channels/@me',
    element: <UserHomePage />,
  },
  {
    path: '/channels/@me/:id',
    element: <DirectMessagePage />,
  },
  {
    path: '/channels/:serverId/:channelId',
    element: <ServerPage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
  {
    path: '/store',
    element: <StorePage />,
  },
]);

export default routes;
