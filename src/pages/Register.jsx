import AuthLayout from '../components/templates/AuthLayout';
import FormRegister from '../components/organisms/FormRegister';

const Register = () => {
  return (
    <>
      <AuthLayout
        type='Register'
        formComponent={FormRegister}
      />
    </>
  );
};

export default Register;
