import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { RootState } from '@store';
import { useAppDispatch } from '@store';

import CharacterBackground from '@components/CharacterBackground';
import LoginForm from '@components/LoginForm';

import { setCurrentAuth } from '@libs/auth/authSlice';

import { AuthTokenResponse } from '@libs/auth/types';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isSubmit, setIsSubmit] = useState(false);

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const handleForgotPasswordClick = useCallback(() => {}, []);

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      setIsSubmit(true);

      try {
        const response: Response = await fetch(
          `${import.meta.env.VITE_BASE_AUTH_URL}/token?grant_type=password`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              apiKey: import.meta.env.VITE_SUPABASE_API_KEY,
            },
            body: JSON.stringify({ email, password }),
          },
        );
        const parsedResponse: AuthTokenResponse = await response.json();

        dispatch(
          setCurrentAuth({
            email: parsedResponse.user.email,
            isEmailConfirmed: !!parsedResponse.user.email_confirmed_at,
            isAuthenticated: true,
            accessToken: parsedResponse.access_token,
            refreshToken: parsedResponse.refresh_token,
          }),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmit(false);
      }
    },
    [dispatch],
  );

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        navigate('/channels/@me');
      }, 100);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="w-screen h-screen flex justify-center items-center select-none gg-regular">
      <CharacterBackground />
      <LoginForm
        isLoading={isSubmit}
        onForgotPasswordClick={handleForgotPasswordClick}
        onSubmit={handleLogin}
      />
    </div>
  );
};

export default LoginPage;
