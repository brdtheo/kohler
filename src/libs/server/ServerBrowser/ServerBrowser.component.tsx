import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState, useAppDispatch } from '@store';

import Add from '@icons/Add';
import Logo from '@icons/Logo';

import { useGetServerListQuery } from '@libs/server/api';
import {
  setSelectedBrowserIndex,
  setSelectedServer,
} from '@libs/server/serverSlice';

import { Server } from '@libs/server/types';

import {
  ServerBrowserDivider,
  ServerBrowserList,
  ServerBrowserListItem,
} from '.';

type ServerListItemProps = {
  server: Server;
  index: number;
};

const ServerListItem: React.FC<ServerListItemProps> = memo(
  ({ server, index }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const selectedBrowserIndex = useSelector(
      (state: RootState) => state.server.serverBrowserIndex,
    );

    const handleServerClick = useCallback(() => {
      dispatch(setSelectedServer(server));
      dispatch(setSelectedBrowserIndex(index + 1));
      navigate(`/channels/${server.id}/1`);
    }, [dispatch, index, navigate, server]);

    return (
      <ServerBrowserListItem
        key={server.id}
        title={server.name}
        thumbnail={server.thumbnail}
        isButtonFocused={selectedBrowserIndex === index + 1}
        onClick={handleServerClick}
      />
    );
  },
);

const ServerBrowser: React.FC = () => {
  const { data: serverList, isLoading } = useGetServerListQuery();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedBrowserIndex = useSelector(
    (state: RootState) => state.server.serverBrowserIndex,
  );

  const handleHomeClick = useCallback(() => {
    dispatch(setSelectedBrowserIndex(0));
    dispatch(setSelectedServer(null));
    navigate('/channels/@me');
  }, [dispatch, navigate]);

  const handleAddServerClick = useCallback(() => {
    dispatch(setSelectedBrowserIndex((serverList?.length || 0) + 1));
  }, [dispatch, serverList?.length]);

  return (
    <div className="bg-shark w-18 h-full flex flex-col gap-3">
      <ServerBrowserList>
        <>
          <ServerBrowserListItem
            title="Direct Messages"
            onClick={handleHomeClick}
            isButtonFocused={selectedBrowserIndex === 0}
          >
            <Logo />
          </ServerBrowserListItem>

          {serverList && serverList?.length > 0 && !isLoading && (
            <>
              <ServerBrowserDivider />
              {serverList.map((server, index) => (
                <ServerListItem key={server.id} server={server} index={index} />
              ))}
            </>
          )}

          <ServerBrowserDivider />

          <ServerBrowserListItem
            onClick={handleAddServerClick}
            isButtonFocused={
              selectedBrowserIndex === (serverList?.length || 0) + 1
            }
            title="Add a server"
            isExtraAction
          >
            <Add />
          </ServerBrowserListItem>
        </>
      </ServerBrowserList>
    </div>
  );
};

export default ServerBrowser;
