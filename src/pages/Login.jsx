import AuthLayout from '../components/templates/AuthLayout';
import FormLogin from '../components/organisms/FormLogin';

const Login = () => {
  return (
    <>
      <AuthLayout
        type='Login'
        formComponent={FormLogin}
      />
    </>
  );
};

export default Login;
