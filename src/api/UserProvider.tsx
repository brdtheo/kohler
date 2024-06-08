import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

import { RootState } from '@store';

import { useGetUserQuery, userApi } from '@libs/user/api';

import { User } from '@libs/user/types';

type Props = {
  children: React.ReactElement;
};

/**
 * Handles the logic of User fetching/usage
 */
const UserProvider: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentUserEmail = useSelector((state: RootState) => state.auth.email);

  const currentUser = userApi.endpoints.getUser.useQueryState(
    currentUserEmail,
    {
      selectFromResult: (response) => response.data as User,
    },
  );

  useGetUserQuery(currentUserEmail);

  useEffect(() => {
    if (!currentUserEmail && !currentUser && location.pathname !== '/') {
      navigate('/');
    }
  }, [currentUserEmail, currentUser, navigate, location.pathname]);

  return <>{children}</>;
};

export default UserProvider;
