import { FormEvent } from 'react';

import Button from '@components/Button';
import Link from '@components/Link';
import TextField from '@components/TextField';

type Props = {
  isLoading?: boolean;
  onForgotPasswordClick: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const LoginForm: React.FC<Props> = ({
  isLoading,
  onForgotPasswordClick,
  onSubmit,
}) => (
  <form
    className="bg-ebony p-8 z-10 rounded shadow-lg w-[480px]"
    onSubmit={onSubmit}
    noValidate
  >
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <h1 className="text-smoke gg-semibold font-semibold text-2xl leading-8">
          Welcome back!
        </h1>
        <div className="text-crestline">We're so excited to see you again!</div>
      </div>

      <div className="flex flex-col mt-5">
        <div className="mb-5 flex flex-col">
          <TextField
            type="email"
            label="email"
            isRequired
            name="login-email"
            id="login-email"
            onChange={() => {}}
          />
        </div>
        <div className="flex flex-col">
          <TextField
            label="password"
            type="password"
            isRequired
            name="login-password"
            id="login-password"
            onChange={() => {}}
          />
        </div>
        <Link className="mt-1.5 mb-5" onClick={onForgotPasswordClick}>
          Forgot your password?
        </Link>

        <Button type="submit" isLoading={isLoading}>
          Log In
        </Button>

        <div className="text-crestline text-sm leading-none">
          <span>Need an account?</span>
          <Link className="ml-1" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  </form>
);

export default LoginForm;
