import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';

import CharacterBackground from '@components/CharacterBackground';
import LoginForm from '@components/LoginForm';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleForgotPasswordClick = useCallback(() => {}, []);

  const handleLogin = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmit(true);
      setTimeout(() => {
        navigate('/channels/@me');
      }, 1000);
    },
    [navigate],
  );

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
