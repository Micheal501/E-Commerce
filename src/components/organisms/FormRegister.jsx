import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';

const FormRegister = () => {
  return (
    <>
      <form className='flex flex-col'>
        <FormInput
          type='firstname'
          name='First Name'
        />
        <FormInput
          type='lastname'
          name='Last Name'
        />

        <FormInput
          type='email'
          name='Email'
        />
        <FormInput
          type='password'
          name='Password'
        />
        <Button type='Register' />
      </form>
    </>
  );
};

export default FormRegister;
