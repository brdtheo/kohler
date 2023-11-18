import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div>
      <p>Login</p>
      <Link to="/channels/@me">LOGIN</Link>
    </div>
  );
};

export default LoginPage;
