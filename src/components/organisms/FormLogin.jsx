import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';

const FormLogin = () => {
  return (
    <>
      <form className='flex flex-col'>
        <FormInput
          type='email'
          name='Email'
        />
        <FormInput
          type='password'
          name='password'
        />
        <Button type='Login' />
      </form>
    </>
  );
};

export default FormLogin;
